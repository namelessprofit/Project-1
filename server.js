var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var controller = require('./controllers');


app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 *JSON API Endpoints
*/
app.get('/api/entry', controller.userEntry.index);
app.post('/api/entry', controller.userEntry.create);
app.delete('/api/entry/:EntryId', controller.userEntry.destroy);

// app.put('/api/entry/:EntryId', controller.userEntry.update);


app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});
