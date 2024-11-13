pipeline {
    agent any

    tools {
      nodejs 'nodejs'
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Pulls the code from GitHub
                git 'https://github.com/techdroidv5/react-jenkins-aws.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                bat 'npm install'
            }
        }
        stage('Build App') {
            steps {
                // Run npm build command to create production-ready files
                bat 'npm run build'
            }
        }
        stage('Run App') {
            steps {
                // Optionally, you can start the React app in the background
                bat 'npm install -g http-server'
                bat 'http-server ./build -p 3000 &'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed!'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
