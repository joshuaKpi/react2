'use strict';

/*import mongoose from 'mongoose';*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    title: { type: String },
    text: { type: String, required: true},
    color: { type: String },
    createdAt: { type: Date }
});

var Note = mongoose.model('Note', noteSchema);