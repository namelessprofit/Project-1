var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    userName: {type: Schema.Types.ObjectId, ref: 'User'},
    dishName: String,
    origin: String,
    calories: Number,
    ingredients: String
});

var Entry = mongoose.model('Entry',
    EntrySchema);

module.exports = Entry;
