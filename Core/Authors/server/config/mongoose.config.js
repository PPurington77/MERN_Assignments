const mongoose = require('mongoose');

const dbName = 'authors';

mongoose
    .connect(`mongodb://localhost/${ dbName }`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Sucessfully connected to ${ dbName }`);
    })
    .catch((error) => 
        console.log(`Mongoose connection to ${ dbName } failed`, error)
    );