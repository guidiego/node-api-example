module.exports = require('../generic/resource')('Person', body => {
    let [nameMod, ageMod] = [{}, {}];

    if (body.name) nameMod = {name : body.name}
    if (body.age) ageMod = {age : body.age}

    return Object.assign(nameMod, ageMod)
})