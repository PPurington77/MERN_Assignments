const mongoose = require('mongoose');

//name req...posiiton..opt
const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            minLength: [2, 'Name must be at least 2 characters long']
        },

        position: {
            type: String,
            required: [false]
        }
    },
    {timestamps: true}
);

const Player = mongoose.model('Player', PlayerSchema);

module.exports = { Player: Player };