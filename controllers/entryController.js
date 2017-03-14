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
