#!/usr/bin/env groovy

def nodeImageVersion = "12.18.5"
def nodeImage = "329802642264.dkr.ecr.eu-west-1.amazonaws.com/bbc-news/node-12-lts:${nodeImageVersion}"

def slackChannel = "#si_repo-psammead"

def notifySlack(colour, buildStatus, gitCommitAuthor, info, gitCommit, gitCommitMessage, slackChannel) {
  // call the global slackSend method in Jenkins
  slackSend(color: colour, message: "*${buildStatus}* on ${env.BRANCH_NAME} [build ${BUILD_DISPLAY_NAME}] \n*Author:* ${gitCommitAuthor} \n*Info:* ${info} \n*Commit Hash* \n${gitCommit} \n*Commit Message* \n${gitCommitMessage}", channel: slackChannel)
}

def cleanUp() {
  sh 'chmod -R 777 .git'
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
    ]) {
      cleanWs()

      if (env.BRANCH_NAME == 'latest') {
      // git checkout
      checkout scm

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
                stage ('Publish to NPM') {
                  withCredentials([string(credentialsId: 'npm_bbc-online_read_write', variable: 'NPM_TOKEN')]) {
                    sh 'make publish'
                  }
                }
              }

              stage ('Talos') {
                sh 'git fetch --all'
                sh "make talos ARGS='${params.TALOS_PACKAGES.replaceAll("[^a-zA-Z0-9._/@,-]+","")}'"
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
}
