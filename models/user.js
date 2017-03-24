var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// NOTE: lets add auth when we have a dull moment
var UserSchema = new Schema({
    userName: String,
    email: String,
    passwordDigest: String,
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
