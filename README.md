# README

## Introduction
This is a web app for sharing YouTube videos
## Prerequisites:
List required software and tools, along with their appropriate versions.
```
Ruby 3.2.2
Rails 7.0
NodeJs 18.10.6
Yarn 3.6
ReactJs 18.2
Ubuntu 20.04
AntDesign 5.4
```

## Installation & Configuration
1. Cloning repository
```bash
git clone git@github.com:cduyhuynh/mytube.git
```
2. Go to app directory and build docker container
```bash
docker-compose up
```
3. After docker started, access to docker
```bash
docker exec -it mytube bash
```
4. Install packages
```bash
yarn install
```
## Database Setup
1. Access docker container
```bash
docker exec -it mytube bash
```
2. Init Database
```bash
bundle exec rake db:create
```
3. Run migrations
```bash
bundle exec rake db:migrate
```
## Running the Application
1. Start the development server
```
docker-compose up
```
2. Access docker and start webpack dev server
```
./bin/webpack-dev-server
```
3. Access application on web browser
```
http://localhost:3000
```
#### Run the test suite if needed
```
rails test test/
```
## Usage
#### Register and Login
* Input your email and password at top right
#### Share video url
* Go to `/share`
* Click Share  video button (only for logged in user)
#### Load more videos on homepage
#### Copyright
User should share videos with no copyright sound
## Troubleshooting: WIP
