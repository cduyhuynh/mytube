# README

* Ruby version: 3.2.2

## Introduction (WIP)
## Prerequisites: List required software and tools, along with their appropriate versions.
## Installation & Configuration: Step-by-step instructions for cloning the repository, installing dependencies, and configuring settings.
1. 
2. Build docker container
```
docker-compose up
```

## Database Setup: Instructions for setting up the database, running migrations, and seeding data if necessary.
1. Access docker container
```
docker exec -it mytube bash
```
2. Init Database
```
bundle exec rake db:create
```
3. Run migrations
```
bundle exec rake db:migrate
```
## Running the Application
### Start the development server
```
docker-compose up
```
### Access application in a web browser
```
http://localhost:3000
```
### Run the test suite
```
rails test test/
```
(BE/FS) Docker Deployment: Instructions for deploying the application using Docker, including building the Docker image and running containers (optional for Backend developer)
## Usage: A brief guide outlining how to use the application, including any specific features or functionality the reviewer should be aware of.
## Troubleshooting: WIP
