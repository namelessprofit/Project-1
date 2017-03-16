var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/healthy_test");


module.exports.User = require('./user');

module.exports.Entry = require('./entry');

// mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/healthy_test");
