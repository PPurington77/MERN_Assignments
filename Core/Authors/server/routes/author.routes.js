const express = require('express');
const {  handleCreateAuthor, handleGetAllAuthors, handleGetAuthorById, handleUpdateAuthorById, handleDeleteAuthorById } = require('../controllers/author.controller');
const router = express.Router();

//api/authors will be added in server.js

router.post('/', handleCreateAuthor);
router.get('/', handleGetAllAuthors);
router.get('/:id', handleGetAuthorById);
router.put('/:id', handleUpdateAuthorById);
router.delete('/:id', handleDeleteAuthorById);

module.exports = { authorRouter: router};