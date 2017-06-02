'use strict'

var express = require('express');
var db = require('sqlite');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var passport = require('passport');
const cors = require('cors');
var session = require('express-session')
var LocalStrategy = require('passport-local').Strategy;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', function(req, res, next){
    res.send('ok');
});

app.get('/api/snack', function (req, res, next) {
    try {
        console.log('getting snacks...');
        db.all('SELECT * FROM Snacks').then(function(snacks){
            res.send(snacks);
        }); 
    } catch (err) {
        next(err);
    }
});

app.get('/api/snack/:id', function(req, res, next){
    try{
        db.get('SELECT * FROM Snacks WHERE ID = ?', req.params.id).then(function(snack){
            res.send(snack);
        });
    }catch(err){
        next(err);
    }
});

app.put('/api/snack/increase/:id', function(req, res, next){
    try{
        db.get('SELECT * FROM Snacks WHERE ID = ?', req.params.id).then(function(snack){            
            snack.amount++;

            db.run('UPDATE Snacks SET amount = $amount WHERE id = $id',{
                $amount: snack.amount,
                $id: req.params.id
            });

            res.send(snack);
        });
    }catch(err){
        next(err);
    }
});

app.put('/api/snack/decrease/:id', function(req, res, next){
    try{
        db.get('SELECT * FROM Snacks WHERE ID = ?', req.params.id).then(function(snack){

            if(snack.amount === 1){
                db.run('DELETE FROM Snacks WHERE id = $id',{
                    $id: req.params.id
                });

                res.send('Snack amount = 0. Deleted.');
            }else{
                snack.amount--;

                db.run('UPDATE Snacks SET amount = $amount WHERE id = $id',{
                    $amount: snack.amount,
                    $id: req.params.id
                });
                res.send(snack);
            }
        });
    }catch(err){
        next(err);
    }
});

app.post('/api/snack/add', function(req, res, next){
    try{
        console.log(req.body);

        db.run('INSERT INTO Snacks(name, amount, cost, createdOn) VALUES ($name, $amount, $cost, $createdOn)',{
            $name: req.body.name,
            $amount: req.body.amount,
            $cost: req.body.cost,
            $createdOn: new Date()
        });

        res.send(true);
    }catch(err){
        next(err);
    }
});

app.get('/api/snackTypes', function (req, res, next){
    try {
        db.all('SELECT * FROM SnackTypes').then(function(SnackTypes){
            res.send(SnackTypes);
        }); 
    } catch (err) {
        next(err);
    }
});

app.post('/api/snackTypes/add', function(req, res, next){
    try{
        console.log(req.body);

        db.run('INSERT INTO SnackTypes(name, price) VALUES ($name, $price)',{
            $name: req.body.name,
            $price: req.body.price
        });

        res.send(true);
    }catch(err){
        next(err);
    }
});

app.post('/api/snackTypes/remove', function(req, res, next){
    try{
        console.log(req.body);

        db.run('DELETE FROM SnackTypes WHERE name = $name',{
            $name: req.body.name
        });

        res.send(true);
    }catch(err){
        next(err);
    }
});

app.get('/api/compensations', function (req, res, next) {
    try {
         db.all('SELECT * FROM Compensations').then(function(Compensations){
            res.send(Compensations);
        }); 
    } catch (err) {
        next(err);
    }
});

app.post('/api/compensations/add', function(req, res, next){
    try{
        console.log(req.body);

        db.run('INSERT INTO Compensations(amount, createdOn) VALUES ($amount, $createdOn); SELECT last_insert_rowid();',{
            $amount: req.body.amount,
            $createdOn: new Date()
        }).then(function(stmt){
            res.send({createdId: stmt.lastID});
         });

        
    }catch(err){
        next(err);
    }
});

app.post('/api/compensations/remove/:id', function(req, res, next){
    try{
        console.log(req.body);

        db.run('DELETE FROM Compensations WHERE id = $id',{
            $id: req.params.id
        });

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