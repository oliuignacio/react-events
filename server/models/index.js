'use strict';

const mongoose = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017/eventing';

const db = () => {
  mongoose.connect(connectionString);
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
  mongoose.connection.on('error', console.error);
};


module.exports = db;