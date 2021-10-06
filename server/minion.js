const express = require('express');
const minionRouter = express.Router();
module.exports = minionRouter;

const {getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId} = require('./db.js');

let minions = getAllFromDatabase('minions');

minionRouter.param('minionId', (req, res, next, id) => {
    const newMinion = getFromDatabaseById('minions', id);
    if (newMinion) {
        req.minion = newMinion;
        next();
    } else {
        res.status(404).send();
    }
});

// Get all minions
minionRouter.get('/', (req, res, next) => {
    res.send(minions);
  });

// Get a single minion
minionRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

// Post a new minion
minionRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

// Update a minion
minionRouter.put('/:minionId', (req, res, next) => {
    res.send(updateInstanceInDatabase('minions', req.body));
});

// Delete an existing minion
minionRouter.delete('/:minionId', (req, res, next) => {
    const deletedMinion = deleteFromDatabasebyId('minions', req.params.minionId);
    deletedMinion ? res.status(204).send() : res.status(500).send();
})

minionRouter.param('workId', (req, res, next, id) => {
    const work = getFromDatabaseById('work', id);
    if (work) {
      req.work = work;
      next();
    } else {
      res.status(404).send();
    }
});
  
// Get a specified minion's array of works
minionRouter.get('/:minionId/work ', (req, res, next) => {
    const works = getAllFromDatabase('work').filter(work => {
        return work.minionId === req.params.minionId;
    });
    res.send(works);
});

// Post a new work to a minion
minionRouter.post('/:minionId/work', (req, res, next) => {
    const newWork = req.body;
    newWork.minionId = req.params.minionId;
    const addWork = addToDatabase('work', newWork);
    res.status(201).send(addWork);
});

// Update a received work 
minionRouter.put('/:minionId/work/:workId', (req, res, next) => {
    if (req.params.minionId === req.body.minionId) {
        res.send(updateInstanceInDatabase('work', req.body));
    } else {
        res.status(400).send();
    }
});

// Delete a received work 
minionRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    const deletedWork = deleteFromDatabasebyId('work', req.params.workId);
    deletedWork ? res.status(204).send() : res.status(500).send();
});
