var db = require('../models');
var Entry = db.Entry;

function index(req, res) {
    Entry.find({}, function(err, entries) {
        if(err){return console.log("INDEX ERR: ", err);}
        // TODO: Remove console.logs from production level code
        console.log('responding with entry:', entries);
        // send a json file containing the array: {entries: entries}
        res.json(entries);
    });
}

function create(req, res) {
    // TODO: Remove console.logs from production level code
    console.log(req.body);
    var newEntry = new Entry({
        //TODO: WHen creating an entry w/ auth, make sure that the person's id goes into userName instead of just a username.
        //NOTE: Do these need to be in quotes?
        "userName": req.body.userName,
        "dishName": req.body.dishName,
        "origin": req.body.origin,
        "calories": req.body.calories,
        "ingredients": req.body.ingredients
    });
    newEntry.save(function(err, savedEntry) {
        if (err) {
          console.log(err);
        }
        // TODO: Remove console.logs from production level code
        console.log('newEntry created: ', savedEntry);
        res.json(savedEntry);
    });
}

function destroy(req, res) {
    // TODO: Remove console.logs from production level code
    console.log(req.params.EntryId);

    db.Entry.findOneAndRemove({_id: req.params.EntryId}, function(err, deadEntry) {
      // TODO: Remove console.logs from production level code
      console.log('loggin params', req.params.EntryId);
        // TODO: What happens if there is an error?
        console.log(deadEntry);
        res.json(deadEntry);
    });
}

function update(req, res) {
    // PUT '/api/entry/:entryId'
    var updateInfo = {
      origin: req.body.origin,
      ingredients: req.body.ingredients,
      calories: req.body.calories,
      dishName: req.body.dishName
    }

    Entry.findOneAndUpate({_id: req.params.entryId}, updateInfo, function(err, foundEntry) {
      if(err){console.log("Err,", err); res.send(404);}
        // TODO: Remove console.logs from production level code
        console.log(foundEntry);
        res.json(foundEntry);
    });
}

module.exports = {
    index: index,
    create: create,
    destroy: destroy
};
