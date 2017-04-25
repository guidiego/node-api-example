const db = require('./database');

module.exports = {
    db,

    person: require('./person'),
    beer: require('./beer'),
}