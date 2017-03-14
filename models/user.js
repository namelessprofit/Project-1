var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: String,
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
