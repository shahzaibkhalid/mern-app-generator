<p align="center">
  <a href="https://shahzaibkhalid.github.io/mern-app-generator">
    <img alt="mern-app-generator" src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png" width="300"/>
  </a>
</p>
<img align="center" alt="travis-ci" src="https://travis-ci.org/shahzaibkhalid/mern-app-generator.svg?branch=master">

[![npm version](https://badge.fury.io/js/mern-app-generator.svg)](https://badge.fury.io/js/mern-app-generator)

[![GitHub issues](https://img.shields.io/github/issues/shahzaibkhalid/mern-app-generator.svg)]
(https://github.com/shahzaibkhalid/mern-app-generator/issues)
[![npm](https://img.shields.io/npm/dm/mern-app-generator.svg)](https://www.npmjs.com/package/mern-app-generator)
[![npm](https://img.shields.io/npm/dt/mern-app-generator.svg)](https://www.npmjs.com/package/mern-app-generator)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](mailto:me@shahzaibkhalid.com)
[![GitHub license](https://img.shields.io/github/license/shahzaibkhalid/mern-app-generator.svg)](https://github.com/shahzaibkhalid/mern-app-generator/blob/master/LICENSE)
<h3 align="center">Create, build and deploy MERN stack applications with breeze.</h3>

## Introduction
MERN App Generator is a CLI-based tool that simplifies the process of creating, building and deploying MERN stack applications.

## Getting Started
Below is a quick overview of how to install MERN App Generator and how to create, build and deploy a MERN stack application from ground.

### Initial assumptions
MERN App Generator is truly unopinionated and doesn't force you to follow a specific way to build and deploy your application. But some settings are default on the basis of what I think is better and simple to get start. MERN App generator assumes by defualt:
- MongoDB database server deployed to [mLab](https://mlab.com/).
- Application (both front-end React and back-end Express based API) is deployed to [Heroku](https://www.heroku.com).
- React based front-end development server is hosted on port 4000 by default.
- ExpressJS based back-end development server is hosted on port 8000 by default.
- In development, there are two development servers, while in production, there's one server which listens for API related requests at `\api\` and React application at base `\` link.

### Installation
Install it once globally:

```sh
npm install -g mern-app-generator
```
### Creating an App

To create a new app, run:

```sh
mern-app-generator my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── webpack.config.js
├── node_modules
├── package.json
├── .gitignore
├── .babelrc
├── .npmignore
├── .env
├── package-lock.json
├── deploy
├── build
├── deploy
└── app
    └── client
        └── public
            └── favicon.ico
            └── index.html
            └── index.js
            └── logo.svg
        └── src
            └── App
                └── App.js
                └── App.css
    └── server
        └── public
            └── server.js
        └── src
```
No need to do manual configuration and folder structure is very simple and intuitive, just the files you need to build your app.<br>
But note that all the configuration files are available with some default settings so that you can enhance your application according to your needs.

Once the installation is done, you can run some commands inside the project folder:

### Run client development server

In order to run the client-development server:

```sh
npm run client-dev
```

This will automatically open the local development server at [http://localhost:4000](http://localhost:4000).

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### Run back-end development server

In order to run the back-end development server:

```sh
npm run server-dev
```
This will automatically open the back-end Express.js server at [http://localhost:8000](http://localhost:8000).<br>
This back-end development server will communicate the client development server running at port 4000.

### Build an application

In order to make a production build of your application:

```sh
npm run build
```

This will produce an optimized build of your application in `build` folder.

### Deploy your application

In order to produce a ready-to-deploy version of your application to deploy to Heroku:

```sh
npm run deploy
```

This will produce a ready-to-deploy version of your application in `deploy` folder. 
Now you can deploy your application by running few handful commands:

```sh
cd deploy
heroku login
git init
git add *
git commit -m "deploying my-app"
heroku create my-app
git push heroku master
```
And within a few seconds, your application will be live at [https://my-app.herokuapp.com/](https://my-app.herokuapp.com/).

## Why Use This?
If you're getting started with MERN stack, you'll find that it's somewhat troublesome to bring together all the pieces of your application. You'd likely use MERN App Generator, because it excludes you of:

- Manually creating your application skeleton
- Manually configuring your application
- Manually installing necessary packages
- Manually preparing your application production build
- Manually preparing your application for deployment

## Report Bugs
If you find any error at any stage of use, please consider [opening issues](https://github.com/shahzaibkhalid/mern-app-generator/issues).

## Contributing
This project aims at covering wide areas related to whole MERN ecosystem and thus requires active contributors to maintain the project efficiently. If you want to contribute, write to me at `me@shahzaibkhalid.com`.

## License
MERN App Generator is licensed under the [MIT License](https://github.com/shahzaibkhalid/mern-app-generator/blob/master/LICENSE).

Copyright (c) 2017 Shahzaib Khalid