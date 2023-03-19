const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Person = new Schema({
    name: String
});
1
const PersonModel = mongoose.model("Person", Person);

module.exports = PersonModel;