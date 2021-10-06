const express = require('express');
const ideaRouter = express.Router();

const {getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId} = require('./db.js');
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');
let ideas = getAllFromDatabase('ideas');

ideaRouter.param('ideaId', (req, res, next, id) => {
    const newIdea = getFromDatabaseById('ideas', id);
    if (newIdea) {
        req.idea = newIdea;
        next();
    } else {
        res.status(404).send();
    }
});

// Get all ideas
ideaRouter.get('/', (req, res, next) => {
    res.send(ideas);
  });

// Get a single idea
ideaRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
});

// Post a new idea
ideaRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
});

// Update an idea
ideaRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    res.send(updateInstanceInDatabase('ideas', req.body));
});

// Delete an existing idea
ideaRouter.delete('/:ideaId', (req, res, next) => {
    const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId);
    deletedIdea ? res.status(204).send() : res.status(500).send();
})

module.exports = ideaRouter;
