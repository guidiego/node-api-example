const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/generic-test')
mongoose.Promise = global.Promise

const Person = mongoose.model('Person', mongoose.Schema({
    name: {type: String},
    age: {type: Number},
}));

app.use(bodyParser.json());

app.get('/person/', (req, res) => {
    Person.find().exec((err, data) => {
        if (err) throw err
        return res.json(data)
    })
});

app.get('/person/:id', (req, res) => {
    Person.findOne().exec((err, data) => {
        if (err) throw err
        return res.json(data)
    })
});

app.post('/person/', (req, res) => {
    let person = new Person(req.body)
    person.save((err, p) => {
        if (err) throw err
        res.json(p)
    })
})

app.put('/person/:id', (req, res) => {
    let [nameMod, ageMod, mod] = [{}, {}, {}];

    if (req.body.name) nameMod = {name : req.body.name}
    if (req.body.age) ageMod = {age : req.body.age}

    Person.update({"_id": req.params.id}, Object.assign(mod, nameMod, ageMod)).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
})

app.delete('/person/:id', (req, res) => {
    Person.remove({"_id": req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
})

app.listen(3000, '0.0.0.0', () => {
    console.log('> Server listening on 3000')
})