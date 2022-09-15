const mongoose = require('mongoose');

const dbName = 'players';

mongoose
    .connect(`mongodb://localhost/${ dbName }`, {
        //to omit deprecation messages
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Succesfully connect to ${ dbName }`);
    })
    .catch((error) => 
        console.log(`Mongoose connection to ${ dbName } failed`, error)
    );