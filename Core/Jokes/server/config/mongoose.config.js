//import mongoose package from node-modules
const mongoose = require('mongoose');

const dbName = 'jokes';

mongoose
    .connect(`mongodb://localhost/${dbName}`, {
    //to omit depracation messages
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Successfully connected to ${dbName}`);
    })
    .catch((error) => 
        console.log(`Mongoose connection to ${dbName} failed`, error)
    );