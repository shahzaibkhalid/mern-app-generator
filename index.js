#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const nodeCMD = require('node-cmd');
const program = require('commander');
const chalk = require('chalk');
const { getInstalledPathSync } = require('get-installed-path')
let projectName;
let currentPath = process.cwd();
const pathOfInstalledModule = getInstalledPathSync('mern-app-generator');

const packageJSON = require('./package.json');

program
  .version(packageJSON.version)
  .description(packageJSON.version)
  .usage('<project-directory>')
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);


if (projectName !== undefined) {
  fs.mkdirSync(path.join(currentPath, projectName));

  let files = fs.readdirSync(path.join(pathOfInstalledModule, 'project'));

  files.forEach(file => {
    fs.copySync(path.join(pathOfInstalledModule, 'project', file), (path.join(currentPath, projectName, file)));
  });
  fs.mkdirSync(path.join(currentPath, projectName, 'build'));
  fs.mkdirSync(path.join(currentPath, projectName, 'deploy'));
  fs.mkdirSync(path.join(currentPath, projectName, 'app', 'server', 'src'));

  console.log();
  console.log(chalk.blue.bgGreenBright(`Your project `) + chalk.black.bgGreenBright(projectName) + chalk.blue.bgGreenBright(' is generated.'));

  let data = fs.readFileSync(path.join(currentPath, projectName, 'package.json'), 'utf-8');

  data = data.replace("create-mern-app", projectName);
  data = data.replace(`"description": "Most simplest way to start and build scalable MERN apps."`, `"description": "That's my ${projectName} project."`)
  data = data.replace('"author": "Shahzaib Khalid"', `"author": "Author of ${projectName}"`);

  fs.writeFileSync(path.join(currentPath, projectName, 'package.json'), data, 'utf-8');
  console.log();
  console.log(chalk.blue.bgGreenBright(`Installing necessary node packages in `) + chalk.black.bgGreenBright(projectName) + chalk.blue.bgGreenBright('. Please wait...'));
  console.log();
  nodeCMD.get(
    ` cd ${projectName} && npm install
        `, (error, data, stderr) => {
      console.log(chalk.blue.bgGreenBright(`All packages are successfully installed in '${chalk.black(projectName)}'.`));
      printAfterInstallation();
      if (error) console.error(error);
  });
} else {
  console.error(chalk.whiteBright.bgRed(`
    Couldn't generate project.

    Project name is not specified.
    Please specify the project name and try again.
    Example: mern-app-generator my-app
  `));
}

function printAfterInstallation() {
  console.log();
  console.log(chalk.blue.bgGreenBright('All set now! You are ready to develop your project.'));
  console.log();
  console.log();
  console.log(chalk.blue.bgGreenBright('Now run the following commands:'));
  console.log();
  console.log(chalk.blue.bgGreenBright('Getting into your project directory:'));
  console.log();
  console.log(chalk.black.bgGreenBright(`cd ${projectName}`));
  console.log();
  console.log(chalk.blue.bgGreenBright('Run client development server:'));
  console.log();
  console.log(chalk.black.bgGreenBright('npm run client-dev'));
  console.log();
  console.log(chalk.blue.bgGreenBright('Run back-end development server (ExpressJS server):'));
  console.log();
  console.log(chalk.black.bgGreenBright('npm run server-dev'));
  console.log();
  console.log(chalk.blue.bgGreenBright('Build your application for production:'));
  console.log();
  console.log(chalk.black.bgGreenBright('npm run build'));
  console.log();
  console.log(chalk.blue.bgGreenBright('Deploy your application for the world to see:'));
  console.log();
  console.log(chalk.black.bgGreenBright('npm run deploy'));
  console.log();
  console.log();
  console.log(chalk.blue.bgGreenBright('Happy Coding! :)'));
  console.log();
}