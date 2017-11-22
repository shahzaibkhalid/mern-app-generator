require('dotenv').config(); //dotenv is only meant for development, not for production, please remove this line for production
const express = require('express');
const path = require('path');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
let app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../../build')));

app.get('/api', (req, res)=> {
  
});

app.post('/api', (req, res)=> {

})

app.delete('/api', (req, res)=> {
  
})

app.put('/api', (req, res)=> {
  
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});

app.listen(port, _=> console.log(`The server is listening on port ${port}`));