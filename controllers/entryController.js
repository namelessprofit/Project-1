var db = require('..models');

function index(req, res) {
    db.User.findById(req.params.UserId, function(err, foundUser) {
        console.log('responding with entry:', foundUser.entry);
        res.json(foundUser.entry);
    });
}

function create(req, res) {
    db.User.findById(req.params.userId, function(err, foundUser) {
        console.log(req.body);
        var newEntry = new db.Entry(req.body);
        foundUser.entry.push(newEntry);
        foundUser.save(function(err, savedUser) {
            console.log('newEntry created: ', newEntry);
            res.json(newEntry);
        });
    });
}

function destroy(req, res) {
 db.User.findById(req.params.userId, function(err, foundUser) {
   console.log(foundUser;
   var correctEntry = foundUser.entry.id(req.params.entryId);
   if (correctEntry) {
     correctEntry.remove();
     foundUser.save(function(err, saved) {
       console.log('REMOVED ', correctEntry.name, 'FROM ', saved.entry);
       res.json(correctEntry);
     });
   } else {
     res.send(404);
   }
 });
}

function update(req, res) {
 db.User.findById(req.params.userId, function(err, foundUser) {
   console.log(foundUser);
   var correctEntry = foundUser.entry.id(req.params.entryId);
   if (correctUser) {
     console.log(req.body);
     correctEntry.entryId = req.body.entryId;
     correctEntry.name = req.body.name; //not sure what params to use here, just following the tunely setup
     foundUser.save(function(err, saved) {
       console.log('UPDATED', correctEntry, 'IN ', saved.entry);
       res.json(correctEntry);
     });
   } else {
     res.send(404);
   }
 });
}


module.exports = {
 index: index,
 create: create,
 update: update,
 destroy: destroy
};
