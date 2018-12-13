#!/usr/bin/env groovy

def dockerRegistry = "329802642264.dkr.ecr.eu-west-1.amazonaws.com"
def nodeImageVersion = "0.0.8"
def nodeImage = "${dockerRegistry}/bbc-news/node-8-lts:${nodeImageVersion}"
def nodeName
def slackChannel = "#psammead"
def stageName = ""
def getCommitInfo = {
  infraGitCommitAuthor = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' ${GIT_COMMIT}").trim()
  appGitCommit = sh(returnStdout: true, script: "git rev-parse HEAD")
  appGitCommitAuthor = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' ${appGitCommit}").trim()
  appGitCommitMessage = sh(returnStdout: true, script: "git log -1 --pretty=%B").trim()
}

def notifySlack(colour, buildStatus, infraGitCommitAuthor, gitCommit, gitCommitAuthor, gitCommitMessage, stageName, slackChannel) {
  // call the global slackSend method in Jenkins
  slackSend(color: colour, message: "${buildStatus}: ${infraGitCommitAuthor} [#${appGitCommit}] (<${appGitCommitAuthor} ${appGitCommitMessage}) ${stageName}", channel: slackChannel)
}

pipeline {
  agent any
  options {
    timeout(time: 60, unit: 'MINUTES')
    timestamps ()
  }
  environment {
    CI = true
  }
  stages {
    stage ('Run application tests') {
      agent {
        docker {
          image "${nodeImage}"
          label nodeName
          args '-u root -v /etc/pki:/certs'
        }
      }
      steps {
        sh 'rm -rf ./app'
        sh 'make install'
        sh 'make tests'
      }
      post {
        always {
          script {
            stageName = env.STAGE_NAME
          }
        }
      }
    }
  }
  post {
    aborted {
      script {
        def messageColor = 'warning'
        if (params.BRANCH == 'latest' && GIT_BRANCH == 'latest') {
          messageColor = 'danger'
        }
        notifySlack(messageColor, 'Aborted', infraGitCommitAuthor, appGitCommit, appGitCommitAuthor, appGitCommitMessage, stageName, slackChannel)
      }
    }
    failure {
      script {
        def messageColor = 'warning'
        if (params.BRANCH == 'latest' && GIT_BRANCH == 'latest') {
          messageColor = 'danger'
        }
        notifySlack(messageColor, 'Failed', infraGitCommitAuthor, appGitCommit, appGitCommitAuthor, appGitCommitMessage, stageName, slackChannel)
      }
    }
    success {
      script {
        if (params.BRANCH == 'latest') {
          notifySlack('good', 'Success', infraGitCommitAuthor, appGitCommit, appGitCommitAuthor, appGitCommitMessage, stageName, slackChannel)
        }
      }
    }
    unstable {
      script {
        def messageColor = 'warning'
        if (params.BRANCH == 'latest' && GIT_BRANCH == 'latest') {
          messageColor = 'danger'
        }
        notifySlack(messageColor, 'Unstable', infraGitCommitAuthor, appGitCommit, appGitCommitAuthor, appGitCommitMessage, stageName, slackChannel)
      }
    }
  }
}
