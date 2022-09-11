const express = require('express');
const { appendFile } = require('fs');
const { handleCreateJoke, 
    handleGetAllJokes, 
    handleGetJokeById, 
    handleUpdateJokeById, 
    handleDeleteJokeById } = require('../controllers/joke.controller');

const router = express.Router();

//api/jokes will be added to all these routes via server.js

router.post('/', handleCreateJoke);
//for future use add in the many create
// router.post('/many', )

router.get('/:id', handleGetJokeById);
router.get('/', handleGetAllJokes);
router.put('/:id', handleUpdateJokeById);
router.delete('/:id', handleDeleteJokeById);

module.exports = { jokeRouter : router };

app.listen(port, () =>
    console.log(`Listening on port ${ port } for Req and Res`)
);