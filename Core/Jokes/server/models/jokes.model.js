const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, 'setup is required'],
            minlength: [10, 'setup must be at least 10 characters']
        },

        punchline: {
            type: String,
            required: [true, 'punchline is required'],
            minlength: [3, 'punchline must be at least 3 characters']
        },

    },

    //for created and updated at
    { timestamps: true }
);

//Register's schema with mongoose and proivdes a string to the name collection
const Joke = mongoose.model('Joke', JokeSchema);

//Always export as an object, just in case we need to add more later

module.exports = { Joke: Joke };