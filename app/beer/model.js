const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BeerSchema = new Schema({
    name: {type: String},
    kind: {type: String},
    alcohol: {type: Number},
})

module.exports = mongoose.model('Beer', BeerSchema);
