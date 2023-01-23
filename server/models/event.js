'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  }
});
const Event = mongoose.model('Event', EventSchema);
exports.Event = Event;

exports.getAll = async () => {
  try {
    let res = await Event.find();
    return res;
  } catch (error) {
    console.log('error', error);
  }
};

exports.postOne = async function (evt) {
  const newEvt = new Event(
    {
      title: evt.title,
      date: evt.date,
      venue: evt.venue
    });
  newEvt.save(function (err, res) {
    if (err) return err;
  });
  return newEvt;
};