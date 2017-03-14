var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    time: Date,
    foodOrigin: String,
    foodDescription: String,
    allergies: [String],
    image: String,
    geoLocation: String
});

var Entry = mongoose.model('Entry',
    EntrySchema);

module.exports = Entry;
