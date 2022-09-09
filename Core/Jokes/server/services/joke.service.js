const { Joke } = require('../models/jokes.model');

const createJoke = async (data) => {
    console.log('service: createJoke');

    //uses the model to interact with the db
    const joke = await Joke.create(data);

    return joke;
};

//Get All
const getAllJokes = async () => {
    const jokes = await Joke.find();

    return jokes;
}

//Get one
const getJokeById = async (id) => {
    const joke = await Joke.findById(id);

    return joke;
}

//Update one
const updateJokeById = async (id, data) => {
    const joke = await Joke.findByIdAndUpdate(id, data, {
        //re-run the validations
        runValidators: true,
        //return the updated joke
        new: true
    });

    return joke;
}

//Delete one
const deleteJokeById = async (id) => {
    const joke = await Joke.findByIdAndDelete(id);

    return joke;
}

//for future ref, if using add to exports below
//create many
// const createManyJokes = async (documents) => {
//     const createPromises = documents.map((document) =>
//     createJoke(document)
//     );

//     return Promise.allSettled(createPromises);
// };

//export all the service function as an object
module.exports = {
    createJoke,
    getAllJokes,
    getJokeById,
    updateJokeById,
    deleteJokeById
};