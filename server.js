var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var userController = require('./controllers/userController');


// JSON API Endpoints
app.get('/', userController.create);
app.post('/user', userController.create);
app.delete('/user/:userId', userController.destroy);

//Resources: User && Posts
//post => user = create New User
//get => form for creating a new user
//delete => delete a user
//
//
//



app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});
