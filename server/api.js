const express = require('express');
const apiRouter = express.Router();
const minionRouter = require('./minion.js');
const ideaRouter = require('./idea.js');
const meetingRouter = require('./meeting.js');

apiRouter.use('/minions', minionRouter);
apiRouter.use('/ideas', ideaRouter);
apiRouter.use('/meetings', meetingRouter);

module.exports = apiRouter;