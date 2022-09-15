const express = require('express');
const { handleCreatePlayer, handleGetAllPlayers, handleGetPlayerById, handleUpdatePlayerById, handleDeletePlayerById } = require('../controllers/player.controller');

const router = express.Router();

//api/player will be added to the routes via server.js

router.post('/', handleCreatePlayer);
router.get('/', handleGetAllPlayers);
router.get('/:id', handleGetPlayerById);
router.put('/:id', handleUpdatePlayerById);
router.delete('/:id', handleDeletePlayerById)

module.exports = { playerRouter : router };