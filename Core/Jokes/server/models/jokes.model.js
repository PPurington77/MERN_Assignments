const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, '{ PATH } is required'],
            minLength: [10, '{ PATH } must be at least { MINLENGTH } characters']
        },

        punchLine: {
            type: String,
            required: [true, '{ PATH } is required'],
            minLength: [3, '{ PATH } must be at least { MINLENGTH } characters']
        },

    },

    //for created and updated at
    { timestamps: true }
);

//Register's schema with mongoose and proivdes a string to the name collection
const Joke = mongoose.model('Joke', JokeSchema);

//Always export as an object, just in case we need to add more later

module.exports = { Joke: Joke };