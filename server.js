var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var userController = require('./controllers/userController');


app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 *JSON API Endpoints
*/



//app.post('/user', userController.create);
//app.delete('/user/:userId', userController.destroy);
app.get('/api/user',controllers.user.index);
app.post('/api/user',controllers.user.create);
app.put('/api/user', controllers.user.update);

app.get('/api/entry', controllers.entry.index);
app.post('/api/entry', controllers.entry.create);
app.put('/api/entry/:entryId', controllers.entry.update);




app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});
