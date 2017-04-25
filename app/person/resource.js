const router = require('express').Router()
const Person = require('mongoose').model('Person');

router.get('/', (req, res) => {
    Person.find().exec((err, data) => {
        if (err) throw err
        return res.json(data)
    })
});

router.get('/:id', (req, res) => {
    Person.findOne().exec((err, data) => {
        if (err) throw err
        return res.json(data)
    })
});

router.post('/', (req, res) => {
    let person = new Person(req.body)
    person.save((err, p) => {
        if (err) throw err
        res.json(p)
    })
})

router.put('/:id', (req, res) => {
    let [nameMod, ageMod] = [{}, {}];

    if (req.body.name) nameMod = {name : req.body.name}
    if (req.body.age) ageMod = {age : req.body.age}

    Person.update({"_id": req.params.id}, Object.assign(nameMod, ageMod)).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
})

router.delete('/:id', (req, res) => {
    Person.remove({"_id": req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
})

module.exports = router