'use strict'

const mongoose = require('mongoose');

const entitySchema = mongoose.Schema({

    name: String,
    edad: String,
    email: String,
    carnet: String,
    numFor: String,
})

module.exports = mongoose.model('Entity', entitySchema);
