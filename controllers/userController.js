var db = require('../models');

function index(req, res) {
    db.User.find({}, function(err, allUsers) {
      //TODO: handle the errors.

      // TODO: Send this array as a json object
        res.json(allUsers);
    });
}

function create(req, res) {
    // TODO: Consider creating an obect literal then passing in that object rather than just the req.body
    db.User.create(req.body, function(err, user) {
        if (err) {
            console.log('error', err);
        }
        // remove console logs from production
        console.log(user);
        res.json(user);
    });
}

function destroy(req, res) {
    db.User.findOneAndRemove({
        _id: req.params.userId
    }, function(err, foundUser) {
        //TODO: Handle ERR
        res.json(foundUser);
    });
}

function update(req, res) {
    // remove console logs from production
    console.log('Updating user', req.body);

    var updateUser = {
      userName: req.body.userName,
      email: req.body.email,
      passwordDigest: req.body.passwordDigest,
    }

    db.User.findOneAndUpdate({_id: req.params.userId}, updateUser, function(err, foundUser) {
        if (err) {console.log('usersController.update.error', err);}
        res.json(foundUser);
    });
}

module.exports = {
    index: index,
    create: create,
    destroy: destroy,
    update: update
};
