const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./equipement.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/project', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json(todo);
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});
todoRoutes.route('/delete/:id').delete(function(req, res) {
    Todo.findByIdAndRemove(req.params.id, function(err, todo) {
        if (err)
            res.status(404).send('data is not found');
        else
        res.json('Equipement deleted');
        
    })
})
todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else{
            //console.log(todo)
        todo.reference= req.body.reference;
            todo.etat=req.body.etat;
            todo.prix= req.body.prix;
            todo.marque= req.body.marque;
            todo.modele=req.body.modele;
            todo.code=req.body.code;
            todo.ip=req.body.ip;
            todo.commentaire=req.body.commentaire;
            todo.dateMiseEnService=req.body.dateMiseEnService;
            

            todo.save().then(todo => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

app.use('/equipements', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});