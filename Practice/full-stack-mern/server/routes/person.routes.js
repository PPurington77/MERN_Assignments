const PersonController = require('../controllers/person.controller');

module.export = function(app){
    app.get('/api', PersonController.index);
}