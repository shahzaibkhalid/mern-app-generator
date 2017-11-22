#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const nodeCMD = require('node-cmd');
const program = require('commander');
const { getInstalledPathSync } = require('get-installed-path')
let param;

/*
program
.version('0.0.1')
    .usage('<input>')
    .action(name => {
      param = name;
    })
        .parse(process.argv);

        if(!program.args.length) {
                    program.help();
        } else {
                    console.log('Input: ' + param);
        }
*/
const pathOfInstalledModule = getInstalledPathSync('mern-app-generator');
console.log(pathOfInstalledModule);
console.log(__dirname);

program
.version('0.0.1')
.description('command description')
.usage('<project-directory>')
.action(name => {
  param = name;
  //console.log(name);
})
.parse(process.argv);


//if(param !== undefined) {
  /*
  getInstalledPath('mern-app-generator').then(path => {
    pathOfInstalledModule = path;
  })
  .catch(err => {
    if(err) {
      console.log('mern-app-generator is not located anywhere. Please check installation and try again.');
    } else {
      */
      fs.mkdirSync(path.join(__dirname, param));
      
      let files = fs.readdirSync(path.join(pathOfInstalledModule, 'project'));
      
      files.forEach(file => {
        fs.copySync(path.join(pathOfInstalledModule, 'project', file), (path.join(__dirname, param, file)));
      });
      console.log(`Your project '${param}' is generated.`);
      
      let data = fs.readFileSync(path.join(__dirname, param, 'package.json'), 'utf-8');
    
      data = data.replace("create-mern-app", param);
      data = data.replace(`"description": "Most simplest way to start and build scalable MERN apps."`, `"description": "That's my ${param} project."`)
      data = data.replace('"author": "Shahzaib Khalid"', `"author": "Author of ${param}"`);
  
      fs.writeFileSync(path.join(__dirname, param, 'package.json'), data, 'utf-8');
      
      console.log(`Installing packages in '${param}'`);
      
      nodeCMD.get(
        ` E:
          cd ${param}
          npm install
        `, (error, data, stderr) => {
        console.log(`All packages are successfully installed in '${param}'`);
        if(error) console.error('Error hai:' + error);
      });
    //}
    
  //});
//}
