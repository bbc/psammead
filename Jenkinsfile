#!/usr/bin/env groovy

def dockerRegistry = "329802642264.dkr.ecr.eu-west-1.amazonaws.com"
def nodeImageVersion = "0.0.8"
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
    stage ('Deploy & Publish') {
      when {
        expression { env.BRANCH_NAME == 'latest' }
      }
      agent {
        docker {
          image "${nodeImage}"
          label nodeName
          args '-u root -v /etc/pki:/certs'
        }
      }
      steps {
        sh 'make storybook'
        withCredentials([string(credentialsId: 'npm_bbc-online_read_write', variable: 'NPM_TOKEN')]) {
          sh 'make publish'
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
