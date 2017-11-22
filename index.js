#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const nodeCMD = require('node-cmd');
const program = require('commander');
const {
  getInstalledPathSync
} = require('get-installed-path')
let param;
let currentPath = process.cwd();
const pathOfInstalledModule = getInstalledPathSync('mern-app-generator');


program
  .version('0.0.1')
  .description('command description')
  .usage('<project-directory>')
  .action(name => {
    param = name;
  })
  .parse(process.argv);


if (param !== undefined) {
  fs.mkdirSync(path.join(currentPath, param));

  let files = fs.readdirSync(path.join(pathOfInstalledModule, 'project'));

  files.forEach(file => {
    fs.copySync(path.join(pathOfInstalledModule, 'project', file), (path.join(currentPath, param, file)));
  });
  console.log(`Your project '${param}' is generated.`);

  let data = fs.readFileSync(path.join(currentPath, param, 'package.json'), 'utf-8');

  data = data.replace("create-mern-app", param);
  data = data.replace(`"description": "Most simplest way to start and build scalable MERN apps."`, `"description": "That's my ${param} project."`)
  data = data.replace('"author": "Shahzaib Khalid"', `"author": "Author of ${param}"`);

  fs.writeFileSync(path.join(currentPath, param, 'package.json'), data, 'utf-8');

  console.log(`Installing packages in '${param}'`);

  nodeCMD.get(
    ` cd ${param} && npm install
        `, (error, data, stderr) => {
      console.log(`All packages are successfully installed in '${param}'`);
      if (error) console.error('Error hai:' + error);
  });
} else {
  console.error('Please specify the project directory name');
}