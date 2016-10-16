var Sequelize = require('sequelize');
var db = {};

var sequelize = new Sequelize('notes_manager', 'postgres', 'admin1234', {
  dialect: "postgres", 
  port: 5432,
});

sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });


var User = require('../models/user_model.js')(sequelize);
var Note = require('../models/note_model.js')(sequelize);

User.hasMany(Note);


sequelize
  .sync({ force: true })
  .then(function (err) {
    console.log('It worked!');
  }, function (err) {
    console.log('An error occurred while creating the table:', err);
  });



db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.Note = Note;

module.exports = db;