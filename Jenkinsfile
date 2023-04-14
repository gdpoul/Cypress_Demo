pipeline {
  agent any
   stages {
    stage('install playwright') {
        steps {
            script {
              bat "npm init -y"
              bat "npm install cypress"
            }
       }
    }
    stage('Run tests') {
        steps {
            script {
              bat "npx cypress run"
            }       
       }
    }
  }
}