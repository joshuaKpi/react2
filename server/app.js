'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils.js';

/*var
    bodyParser = require('body-parser'),
    db = require('./utils/DataBaseUtils'),
    config = require('../webpack.config');*/

db.setUpConnection();

const app = express();

app.use( bodyParser.json() );

app.get('/', (req, res) => {
  res.sendFile('C:/Projects/Train/react2/client/main.js');
});

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

let server = app.listen(serverPort, () => {
    console.log(`Server up and listen port ${serverPort}`);
});


/*
app.get('/', function(req, res){
       res.send('Hello');
});

var server = app.listen(3030, function(){
        console.log('server up and listen port 3030');
});*/
