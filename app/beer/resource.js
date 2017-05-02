module.exports = require('../generic/resource')('Beer', body => {
    let [nameMod, kindMod, alcoholMod] = [{}, {}, {}];

    if (req.body.name) nameMod = {name : req.body.name}
    if (req.body.kind) kindMod = {kind : req.body.kind}
    if (req.body.alcohol) alcoholMod = {alcohol : req.body.alcohol}
    
    return Object.assign(nameMod, kindMod, alcoholMod)
})