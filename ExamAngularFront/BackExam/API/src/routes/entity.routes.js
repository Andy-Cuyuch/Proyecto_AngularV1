'use strict'

const entityController = require('../controller/entity.controller');
const express = require('express');
const api = express.Router();
const mdAuth = require('../services/authenticated');

api.get('/test', entityController.test);
api.post('/entitySave', entityController.EntitySave);

module.exports = api;