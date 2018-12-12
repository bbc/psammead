#!/usr/bin/env groovy

def dockerRegistry = "329802642264.dkr.ecr.eu-west-1.amazonaws.com"
def nodeImageVersion = "0.0.5"
def nodeImage = "${dockerRegistry}/bbc-news/node-8-lts:${nodeImageVersion}"
def nodeName
def stageName = ""
def getCommitInfo = {
  infraGitCommitAuthor = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' ${GIT_COMMIT}").trim()
  appGitCommit = sh(returnStdout: true, script: "git rev-parse HEAD")
  appGitCommitAuthor = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' ${appGitCommit}").trim()
  appGitCommitMessage = sh(returnStdout: true, script: "git log -1 --pretty=%B").trim()
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
      when {
        expression { env.BRANCH_NAME != 'latest' }
      }
      agent {
        docker {
          image "${nodeImage}"
          label nodeName
          args '-u root -v /etc/pki:/certs'
        }
      }
      steps {
        withCredentials([string(credentialsId: 'psammead-cc-reporter-id', variable: 'CC_TEST_REPORTER_ID')]) {
          sh 'make install'
          sh 'make tests'
        }
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
}
