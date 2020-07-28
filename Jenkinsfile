#!/usr/bin/env groovy

def nodeImageVersion = "12.16.2"
def nodeImage = "329802642264.dkr.ecr.eu-west-1.amazonaws.com/bbc-news/node-12-lts:${nodeImageVersion}"

def slackChannel = "#si_repo-psammead"

def notifySlack(colour, buildStatus, gitCommitAuthor, info, gitCommit, gitCommitMessage, slackChannel) {
  // call the global slackSend method in Jenkins
  slackSend(color: colour, message: "*${buildStatus}* on ${env.BRANCH_NAME} [build ${BUILD_DISPLAY_NAME}] \n*Author:* ${gitCommitAuthor} \n*Info:* ${info} \n*Commit Hash* \n${gitCommit} \n*Commit Message* \n${gitCommitMessage}", channel: slackChannel)
}

def cleanUp() {
  sh 'chmod -R 777 .git'
}

def hasPackageChanged() {
  for (changeLogSet in currentBuild.changeSets) {
    for (entry in changeLogSet.getItems()) {
      for (file in entry.getAffectedFiles()) {
        if (file.getPath() ==~ /^packages/) {
          return true
        }
      }
    }
  }

  return false
}

node {
  properties(
    [
        buildDiscarder(
            logRotator(
                daysToKeepStr: '10',
                artifactDaysToKeepStr: '10'
            )
        ),
        parameters([
          string(name: 'TALOS_PACKAGES', defaultValue: '', description: 'Comma seperated list of packages to have talos bump. e.g. "@bbc/psammead-styles,@bbc/psammead-brand"')
        ])
    ]
  )
  timeout(time: 30, unit: 'MINUTES') {
    withEnv([
      'CI=true',
      'CC_TEST_REPORTER_ID=06c1254d7c2ff48f763492791337193c8345ca8740c34263d68adcc449aff732'
    ]) {
      cleanWs()

      // git checkout
      checkout scm

      // Does merge contain changes to packages?
      if (hasPackageChanged()) {
        currentBuild.result = 'SUCCESS'

        return
      }

      // get git commit info for notifications
      gitCommitHash = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
      gitCommitAuthor = sh(returnStdout: true, script: "git log -1 --pretty=%an").trim()
      gitCommitMessage = sh(returnStdout: true, script: "git log -1 --pretty=%B").trim()

      docker.image("${nodeImage}").inside {
        try {
          stage ('Setup & Install') {
            sh 'make setup-git'
            sh 'make install'
          }

          if (params.TALOS_PACKAGES == '') {
            stage ('Development Tests') {
              parallel (
                'App Tests & Code Coverage': {
                  sh 'make code-coverage-before-build'
                  sh 'make test'
                  sh 'make code-coverage-after-build'
                  sh 'make change-scanner'
                },
                'ChromaticQA Tests': {
                  withCredentials([string(credentialsId: 'psammead-chromatic-app-code', variable: 'CHROMATIC_APP_CODE')]) {
                    sh 'make test-chromatic'
                  }
                }, failFast: true
              )
            }
          }

          if (env.BRANCH_NAME == 'latest' && params.TALOS_PACKAGES == '') {
            stage ('Deploy Storybook & Publish to NPM') {
              parallel (
                'Deploy Storybook': {
                  sh 'make deploy-storybook'
                },
                'Publish to NPM': {
                    withCredentials([string(credentialsId: 'npm_bbc-online_read_write', variable: 'NPM_TOKEN')]) {
                      sh 'make publish'
                    }
                }
              )
            }
          }

          if (env.BRANCH_NAME == 'latest') {
            stage ('Talos') {
              sh 'git fetch --all'
              sh "make talos ARGS='${params.TALOS_PACKAGES.replaceAll("[^a-zA-Z0-9._/@,-]+","")}'"
            }
          }
        } catch (Throwable e) {
          echo "Pipeline Failed: ${e}"
          currentBuild.result = 'FAILURE'
          // throw caught error to ensure pipeline fails
          throw e
        } finally {
          def buildResult = currentBuild.result ?: 'SUCCESS'
          cleanUp()

          echo "currentBuild.currentResult: ${currentBuild.currentResult}"
          echo "currentBuild.result: ${currentBuild.result}"

          // send slack notification if building branch: latest
          if (env.BRANCH_NAME == 'latest') {
            switch (buildResult) {
              case 'SUCCESS':
                notifySlack('good', 'Success', gitCommitAuthor, 'Successfully Deployed', gitCommitHash, gitCommitMessage, slackChannel)
                break
              case 'FAILURE':
                notifySlack('danger', 'Failure', gitCommitAuthor, 'Pipeline has failed', gitCommitHash, gitCommitMessage, slackChannel)
                break
              case 'UNSTABLE':
                notifySlack('danger', 'Unstable', gitCommitAuthor, 'Pipeline in an unstable state', gitCommitHash, gitCommitMessage, slackChannel)
                break
              case 'ABORTED':
                notifySlack('danger', 'Aborted', gitCommitAuthor, 'Pipeline was aborted', gitCommitHash, gitCommitMessage, slackChannel)
                break
              default:
                notifySlack('danger', 'Unknown', gitCommitAuthor, 'Pipeline has failed', gitCommitHash, gitCommitMessage, slackChannel)
                break
            }
          }
        }
      }
    }
  }
}
