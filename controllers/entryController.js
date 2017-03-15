var db = require('../models');
var Entry = db.Entry;

function index(req, res) {
    db.Entry.find({}, function(err, entries) {
        if(err){return console.log("INDEX ERR: ", err);}
        console.log('responding with entry:', entries);
        res.json(entries);
    });
}

function create(req, res) {
console.log(req.body);
    var newEntry = new Entry({
        "userName": req.body.userName,
        "dishName": req.body.dishName,
        "foodOrigin": req.body.origin,
        "calories": req.body.calories,
        "foodDescription": req.body.ingredients
    })
    newEntry.save(function(err, savedEntry) {
        if (err) {
          console.log(err);
        }
        console.log('newEntry created: ', savedEntry);
        res.json(savedEntry);
    });
}

function destroy(req, res) {
    db.User.findById(req.params.userId, function(err, foundUser) {
        console.log(foundUser);
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

function findAll(req, res) {
    db.Entry.find({}, function(err, allEntries) {
        res.json(allEntries);
    });
}

module.exports = {
    findAll: findAll,
    index: index,
    create: create,
    update: update,
    destroy: destroy
};
