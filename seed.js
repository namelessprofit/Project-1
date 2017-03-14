var db = require('./models');

var userList = [];
userList.push({
    firstName: 'Archy',
    lastName: 'Posada',
    bio: 'GA student working on the railway.',
    profilePic: 'null'
});
userList.push({
    firstName: 'Shaya',
    lastName: 'Nelson',
    bio: 'GA student working on the planes.',
    profilePic: 'null'
});
userList.push({
    firstName: 'Gabriella',
    lastName: 'Choy',
    bio: 'GA student working on the boatsway.',
    profilePic: 'null'
});
console.log("users have been added");

var entryList = [];
entryList.push({
time: Date,
foodOrigin: "Mexico",
foodDescription: "Enchiladas with beans and rice. Queso fresco, salsa, guacamole.",
allergies: ["null"],
image: "null",
});

userList.forEach(function(user) {
 user.entry = entryList;
});


db.user.remove({}, function(err, user){

 db.user.create(userList, function(err, user){
   if (err) { return console.log('ERROR', err); }
   console.log("all user:", user);
   console.log("created", user.length, "user");
   process.exit();
 });

});
