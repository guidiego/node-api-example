const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PersonSchema = new Schema({
    name: {type: String},
    age: {type: Number},
})

module.exports = mongoose.model('Person', PersonSchema);
