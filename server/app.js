'use strict';

/*import express from 'express';*/

const
    express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./utils/DataBaseUtils');

db.setUpConnection();

let app = express();

app.use( bodyParser.json() );


app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

let server = app.listen(3030, () => {
    console.log('Server up and listen port 3030');
});


/*
app.get('/', function(req, res){
       res.send('Hello');
});

var server = app.listen(3030, function(){
        console.log('server up and listen port 3030');
});*/
