const router = require('express').Router()

module.exports = (model, modFactory) => {
    const Model = typeof model == 'string'? require('mongoose').model(model) : model;

    router.get('/', (req, res) => {
        Model.find().exec((err, data) => {
            if (err) throw err
            return res.json(data)
        })
    });

    router.get('/:id', (req, res) => {
        Model.findOne({"_id": req.params.id}).exec((err, data) => {
            if (err) throw err
            return res.json(data)
        })
    });

    router.post('/', (req, res) => {
        let m = new Model(req.body)
        m.save((err, p) => {
            if (err) throw err
            res.json(p)
        })
    })

    router.put('/', (req, res) => {
        Model.update({"_id": req.body.id}, req.body).exec((err, data) => {
            if (err) throw err
            res.json(data)
        })
    })

    router.patch('/:id', (req, res) => {
        Model.update({"_id": req.params.id}, modFactory(req.body)).exec((err, data) => {
            if (err) throw err
            res.json(data)
        })
    })

    router.delete('/:id', (req, res) => {
        Model.remove({"_id": req.params.id}).exec((err, data) => {
            if (err) throw err
            res.json(data)
        })
    })

    return router
}