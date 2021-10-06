const express = require('express');
const meetingRouter = express.Router();

const {getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting} = require('./db.js');

let meetings = getAllFromDatabase('meetings');

// Get all meetings
meetingRouter.get('/', (req, res, next) => {
    res.send(meetings);
  });

// Post a new meeting
meetingRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    addToDatabase('meetings', newMeeting);
    res.status(201).send(newMeeting);
});

// Delete all meetings
meetingRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
});  

module.exports = meetingRouter;
