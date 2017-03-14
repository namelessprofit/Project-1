var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var userController = require('./controllers/userController');


app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.post('/user', userController.create);
app.delete('/user/:userId', userController.destroy);


app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});
