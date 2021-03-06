var db = require('./models');

var userList = [];
userList.push({
    userName: 'Archy',
    lastName: 'Posada',
    bio: 'GA student working on the railway.',
    profilePic: 'null'
});
userList.push({
    userName: 'Shaya',
    lastName: 'Nelson',
    bio: 'GA student working on the planes.',
    profilePic: 'null'
});
userList.push({
    userName: 'Gabriella',
    lastName: 'Choy',
    bio: 'GA student working on the boatsway.',
    profilePic: 'null'
});
console.log("users have been added");

var entryList = [];
entryList.push({
    userName: "Archy",
    dishName: "Enchiladas",
    foodOrigin: "Mexico",
    calories: 270,
    foodDescription: "Vegan cheese, gluten free, organic usda avocado"
});
entryList.push({
    userName: "Archy",
    dishName: "Quiche",
    foodOrigin: "France?",
    calories: 350,
    foodDescription: "Powered by organic french people!"
});
entryList.push({
    userName: "Archy",
    dishName: "Fruit Bowl",
    foodOrigin: "World",
    calories: 350,
    foodDescription: "Powered by organic Greek people!"
});

db.User.remove({}, function(err, user) {

    db.User.create(userList, function(err, users) {
        if (err) {
            return console.log('ERROR', err);
        }
        console.log("all users:", users);
        console.log("created", user.length, "users");

        // TODO: This ensures everything will be removed and created BEFORE process exit.
        db.Entry.remove({}, function(err, entry) {

          db.Entry.create(entryList, function(err, entries) {
            if (err) {
              return console.log('ERROR', err);
            }
            console.log("all entries:", entries);
            console.log("created", entryList.length, "entries");
            process.exit();
          });
        });

    });
});
