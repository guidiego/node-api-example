const router = require('express').Router()
const Beer = require('mongoose').model('Beer');

router.get('/', (req, res) => {
    Beer.find().exec((err, data) => {
        if (err) throw err
        return res.json(data)
    })
});

router.get('/:id', (req, res) => {
    Beer.findOne().exec((err, data) => {
        if (err) throw err
        return res.json(data)
    })
});

router.post('/', (req, res) => {
    let beer = new Beer(req.body)
    beer.save((err, p) => {
        if (err) throw err
        res.json(p)
    })
})

router.put('/:id', (req, res) => {
    let [nameMod, kindMod, alcoholMod] = [{}, {}, {}];

    if (req.body.name) nameMod = {name : req.body.name}
    if (req.body.kind) kindMod = {kind : req.body.kind}
    if (req.body.alcohol) alcoholMod = {alcohol : req.body.alcohol}

    Beer.update({"_id": req.params.id}, Object.assign(nameMod, kindMod, alcoholMod)).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
})

router.delete('/:id', (req, res) => {
    Beer.remove({"_id": req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
})

module.exports = router