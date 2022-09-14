const { Author } = require('../models/authors.model');

//CRUD
//Create

const createAuthor = async (data) => {
    console.log('Service: createAuthor');

    const author = await Author.create(data);

    return author;
}

//Read
//Read All
const getAllAuthors = async () => {
    const authors = await Author.find();

    return authors;
}

//Read One
const getAuthorById = async (id) => {
    const author = await Author.findById(id);

    return author;
}

//Update
const updateAuthorById = async (id, data) => {
    const author = await Author.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return author;
}

//Delete
const deleteAuthorById = async (id) => {
    const author = await Author.findByIdAndDelete(id);

    return author;
}

module.exports = { createAuthor, getAllAuthors, getAuthorById, updateAuthorById, deleteAuthorById };