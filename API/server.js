var express = require('express');
var db = require('sqlite');
var Promise = require('bluebird');
var bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/snacks', function (req, res, next) {
    try {
        console.log('getting snacks...');
        const snacks = db.all('SELECT * FROM Snacks'); // <=
        res.send(snacks);
    } catch (err) {
        next(err);
    }
});

app.get('/snackTypes', function (req, res, next){
    try {
        const snackTypes = db.all('SELECT * FROM SnackTypes'); // <=
        res.send(snackTypes);
    } catch (err) {
        next(err);
    }
});

app.get('/compensations', function (req, res, next) {
    try {
        const compensations = db.all('SELECT * FROM Compensations'); // <=
        res.send(compensations);
    } catch (err) {
        next(err);
    }
});

app.post('/addSnack', function(req, res, next){
    try{
        console.log(req.body);
        res.send(true);
    }catch(err){
        next(err);
    }
});

Promise.resolve()
    // First, try to open the database
    .then(() => db.open('./database.sqlite', { Promise }))      // <=
    // Update db schema to the latest version using SQL-based migrations
    .then(() => db.migrate())                  // <=
    // Display error message if something went wrong
    .catch((err) => console.error(err.stack))
    // Finally, launch the Node.js app
    .finally(() => app.listen(port));