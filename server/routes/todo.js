var express = require('express');
var router = express.Router();
var database = require('../firebase.js').database;
//

/* GET all todo list entries */
router.get('/', function(req, res, next) {
    // TODO implementation for getting entries

    res.send('get all todo entries'); // TODO change response after
});


/* POST new todo entry */
router.post('/', function(req, res, next) {
    // TODO implementation for adding new entry to database

    res.send('post new entry to database'); // TODO change response after
});


/* PUT entry update */
router.put('/', function(req, res, next) {
    // TODO implementation for updating entry in database

    res.send('put entry update into database'); // TODO change response after
});


/* DELETE todo list entry*/
router.delete('/:userId', function(req, res, next) {
    // // TODO Error handling
    database.ref(req.params.userId).remove();
    res.send({'statusCode': 200, 'response': 'Deleted todo item successfully.'}); // TODO change response after
});


module.exports = router;