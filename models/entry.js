var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    userName: String,
    dishName: String,
    foodOrigin: String,
    calories: Number,
    foodDescription: String
});

var Entry = mongoose.model('Entry',
    EntrySchema);

module.exports = Entry;
