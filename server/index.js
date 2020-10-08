const express = require('express');
const app = express();
const cors = require ('cors')
const bodyParser = require('body-parser');
// const request = require('request-promise')
// const db = require('../db/db.js');
// const { filter } = require('bluebird');
const port = 3003;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '2MB'}));
app.use(cors());


app.listen(port, () => {
  console.log(`listening on ${port}`);
})