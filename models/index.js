var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/healthy_test");

var user = require('./User');

module.exports.User = User;
module.exports.entry = require('./entry');
