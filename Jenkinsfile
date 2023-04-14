pipeline {
  agent any
   stages {
    stage('Install dependencies') {
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