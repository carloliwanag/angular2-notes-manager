var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

var db = require('./db/sequelize-config.js');

var user = require('./routes/user_route.js')(app, db);
var note = require('./routes/note_route.js')(app, db);

var server = app.listen(3020, function() {
  console.log('App listening on port 3020!');
});

module.exports = app;