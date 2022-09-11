const {
    createJoke,
    getAllJokes,
    getJokeById,
    updateJokeById,
    deleteJokeById
} = require('../services/joke.service');

const handleCreateJoke = async (req, res) => {
    console.log('controller: handleCreateJoke req.body:', req.body);

    try {
        const joke = await createJoke(req.body);
        return res.json(joke);
    }
    catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAllJokes = async (req, res) => {
    try {
        const jokes = await getAllJokes();
        return res.json(jokes);
    }
    catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetJokeById = async (req, res) => {
    try {
        const joke = await getJokeById(req.params.id);
        return res.json(joke);
    }
    catch (error) {
        return res.status(400).json(error);
    }
};

const handleUpdateJokeById = async (req, res) => {
    try {
        const joke = await updateJokeById(req.params.id, req.body);
        return res.json(joke);
    }
    catch (error) {
        return res.status(400).json(error);
    }
};

const handleDeleteJokeById = async (req, res) => {
    try {
        const joke = await deleteJokeById(req.params.id);
        return res.json(joke);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

//for future ref
// const handleCreateManyJokes = async (req, res) => {
//     try{
//         if(Array.isArray(req.body) === false) {
//             throw new Error('The request body must be an array');
//         }
//         const settledOutcomes = await handleCreateManyJokes(req.body);
//         return res.json(settledOutcomes);
//     }
//     catch (error) {
//         return res.status(400).json(error);
//     }
// };

//export the methods as an object so they can be added to routes
module.exports = {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleUpdateJokeById,
    handleDeleteJokeById
};