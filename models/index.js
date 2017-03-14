var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/healthy_test");

var user = require('./user.js');

module.exports.User = user;
module.exports.entry = require('./entry');
