'use strict';

const Hapi = require('hapi');

var Joi = require('joi');
var mongoose = require('mongoose');

//MongoDB
mongoose.connect('mongodb://localhost/book-api');

const server = new Hapi.Server();
server.connection({ port: 3000 });


server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

// User model
var CRUD = {
    db: mongoose.connection,                 // MongoDB connection
    collection: 'book',    // MongoDB collection
    // Create options
    create: {
        // Valid create payload
        payload: {
            name: Joi.string().required(),
            cover: Joi.string().required(),
            genre: Joi.string().required(),
            pageCount: Joi.number().required()
        },                 
        defaults: {},
        date: 'created',    // Sets 'created' field to be dated at doc creation
     },
    // Read options for get and find
    read: { 
      access: 'normal'
    },
    // Update options
    update: { },
    // Delete options
    del: { },
    // Joi options when validating payloads    
    validationOpts: {
        abortEarly: false
    }

};

var Book = require('toothache')(CRUD);

// Create
server.route({
    method: 'POST', path: '/book',
    config: {
        handler: Book.create
    }
});

server.route({
    method: 'GET', path: '/book',
    config: {
        handler: Book.find
    }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});

