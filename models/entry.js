var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    date: String,
    foodOrigin: String,
    foodDescription: String,
    allergies: String,
    image: String,
    geoLocation: String
});

var EntrySchema = mongoose.model('Entry,' EntrySchema);

module.exports = Entry;
