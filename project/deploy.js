const path = require('path');
const fs = require('fs-extra');
const replace = require("replace");
let currentPath = process.cwd();

let files = fs.readdirSync(path.join(__dirname));

files.forEach(file => {
  if(file === 'package.json') {
    let data = fs.readFileSync(file, 'utf-8');

    data = data.replace(`"client-dev": "webpack-dev-server --port 4000 --hot --inline"`, `"start": "node ./app/server/public/server.js"`);
    data = data.replace(`"server-dev": "opn http://localhost:8000 && nodemon ./app/server/public/server.js localhost 8000"`, `"heroku-postbuild": "npm install --only=dev && npm install && npm run build"`);
    fs.writeFileSync(path.join(__dirname, 'deploy', 'package.json'), data, 'utf-8');
  }

  if(file === 'app') {
    fs.copySync(path.join(__dirname, file), (path.join(__dirname, 'deploy', 'app')));
    replace({
      regex: "http://localhost:8000/api/",
      replacement: "/api/",
      paths: [`${path.join(__dirname, 'deploy', 'app')}`],
      recursive: true,
      silent: true,
    });
    replace({
      regex: "require('dotenv').config();",
      replacement: "//require('dotenv').config();",
      paths: [`${path.join(__dirname, 'deploy', 'app')}`],
      recursive: true,
      silent: true,
    });
  }
});
/*
replace({
  regex: "http://localhost:8000/api/",
  replacement: "bar",
  paths: [`${path.join(__dirname, 'app')}`],
  recursive: true,
  silent: true,
});
*/
