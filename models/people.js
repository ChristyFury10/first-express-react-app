const { mongo } = require("mongoose");
const mongoose = require("./connection.js");

///////////////////////////////
// MODELS
////////////////////////////////
const PeopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String
});

const People = mongoose.model("People", PeopleSchema);
// collection of people will be called peoples in MongoDB

module.exports = People;