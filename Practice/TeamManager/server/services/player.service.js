const { Player } = require('../models/player.model');

//CRUD
//Create
const createPlayer = async (data) => {
    console.log('Service: createPlayer');

    const player = await Player.create(data);

    return player;
};

//Read
//Read All
const getAllPlayers = async () => {
    const players = await Player.find();

    return players;
};

//Read One
const getPlayerById = async (id) => {
    const player = await Player.findById(id);

    return player;
};

//Update
const updatePlayerById = async (id, data) => {
    const player = await Player.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    
    return player;
};

//Delete
const deletePlayerById = async (id) => {
    const player = await Player.findByIdAndDelete(id);

    return player;
};

module.exports = { createPlayer, getAllPlayers, getPlayerById, updatePlayerById, deletePlayerById };