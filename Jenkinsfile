#!/usr/bin/env groovy

def nodeImage = "329802642264.dkr.ecr.eu-west-1.amazonaws.com/bbc-news/node-10-lts:10.16.0"

def slackChannel = "#si_repo-psammead"

def notifySlack(colour, buildStatus, gitCommitAuthor, info, gitCommit, gitCommitMessage, slackChannel) {
  // call the global slackSend method in Jenkins
  slackSend(color: colour, message: "*${buildStatus}* on ${env.BRANCH_NAME} [build ${BUILD_DISPLAY_NAME}] \n*Author:* ${gitCommitAuthor} \n*Info:* ${info} \n*Commit Hash* \n${gitCommit} \n*Commit Message* \n${gitCommitMessage}", channel: slackChannel)
}

def cleanUp() {
  sh 'chmod -R 777 .git'
}

node {
  timeout(time: 30, unit: 'MINUTES') {
    withEnv([
      'CI=true',
      'CC_TEST_REPORTER_ID=06c1254d7c2ff48f763492791337193c8345ca8740c34263d68adcc449aff732'
    ]) {
      cleanWs()

      // git checkout
      checkout scm

      // get git commit info for notifications
      gitCommitHash = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
      gitCommitAuthor = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' ${gitCommitHash}").trim()
      gitCommitMessage = sh(returnStdout: true, script: "git log -1 --pretty=%B").trim()

      docker.image("${nodeImage}").inside {
        try {
          stage ('Setup & Install') {
            sh 'make setup-git'
            sh 'make install'
          }

          stage ('Development Tests') {
            parallel (
              'App Tests & Code Coverage': {
                sh 'make code-coverage-before-build'
                sh 'make test'
                sh 'make code-coverage-after-build'
              },
              'ChromaticQA Tests': {
                withCredentials([string(credentialsId: 'psammead-chromatic-app-code', variable: 'CHROMATIC_APP_CODE')]) {
                  sh 'make test:chromatic'
                }
              }, failFast: true
            )
          }

          if (env.BRANCH_NAME == 'latest') {
            stage ('Deploy Storybook & Publish to NPM') {
              parallel (
                'Deploy Storybook': {
                  sh 'npm run deploy-storybook'
                },
                'Publish to NPM': {
                    withCredentials([string(credentialsId: 'npm_bbc-online_read_write', variable: 'NPM_TOKEN')]) {
                      sh 'make publish'
                    }
                }
              )
            }

            stage ('Talos') {
              sh 'git fetch --all'
              sh 'make talos'
            }
          }
        } catch (Throwable e) {
          echo "Pipeline Failed: ${e}"

          // send slack notification if building branch: latest
          if (env.BRANCH_NAME == 'latest') {
            // catch error in stages and notify slack
            notifySlack('danger', 'Failed', gitCommitAuthor, e, gitCommitHash, gitCommitMessage, slackChannel)
          }

          // throw caught error to ensure pipeline fails
          throw e
        } finally {
          cleanUp()

          // send slack notification if building branch: latest
          if (env.BRANCH_NAME == 'latest') {
            switch (currentBuild.result) {
              case 'SUCCESS':
                notifySlack('good', 'Success', gitCommitAuthor, 'Successfully Deployed', gitCommitHash, gitCommitMessage, slackChannel)
                break
              case 'UNSTABLE':
                notifySlack('DANGER', 'Unstable', gitCommitAuthor, 'Pipeline in an unstable state', gitCommitHash, gitCommitMessage, slackChannel)
                break
              default:
                echo "Pipeline has failed with an unknown build result"
                break
            }
          }
        }
      }
    }
  }
}
