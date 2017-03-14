var db = require('../models');

function index(req, res) {
    db.User
}

function create(req, res) {
    db.User.create(req.body, function(err, user) {
        if (err) {
            console.log('error', err);
        }
        console.log(user);
        res.json(user);
    });
}

function destroy(req, res) {
  db.User.findOneAndRemove({ _id: req.params.userId }, function(err, foundUser){
      res.json(foundUser);
});
}

function update(req, res) {
   console.log('Updating with Info', req.body);
   db.User.findById(req.params.userId, function(err, foundUser){
   if (err){console.log('usersController.update.error', err);}
   foundUser.firstName = req.body.firstName;
   foundUser.lastName = req.body.lastName;
   foundUser.save(function(err, savedUser){
      if (err){console.log('saving altered user failed');}
   });
});
}

module.exports = {
    index: index,
    create: create,
    destroy: destroy,
    update: update
};
