'use strict';

const models = require('../models/event');

exports.getEvents = async (req, res) => {

  const response = {
    data: 'Internal server Error. @getEvents',
    status: 500
  };

  try {
    const events = await models.getAll();
    response.status=201;
    response.data=events;
    
    res.status(201);
    res.send(events);
  } catch (error) {
    console.log('error', error);
    res.sendStatus(500);
  }

};

exports.postEvent = async (req, res) => {
  try {
    const event = await models.postOne(req.body);
    res.status(201);
    res.send(event);
  } catch (error) {
    console.log('error', error); 
    res.sendStatus(500);
  }
};