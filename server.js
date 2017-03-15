var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var controller = require('./controllers');


app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/entry/findAll', controller.userEntry.findAll);

app.post('/entry/create', controller.userEntry.create);
/*
 *JSON API Endpoints
*/



//app.post('/user', controller.user.create);
//app.delete('/user/:userId', controller.user.destroy);
// app.get('/api/user',controller.user.index);
// app.post('/api/user',controller.user.create);
// app.put('/api/user', controller.user.update);
//
app.get('/api/entry', controller.userEntry.index);
// app.post('/api/entry', controllers.entry.create);
// app.put('/api/entry/:entryId', controllers.entry.update);
//



app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});
