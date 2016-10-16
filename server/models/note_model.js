var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Note = sequelize.define('Note', {
    subject: Sequelize.STRING,
    body: Sequelize.STRING,
    version: Sequelize.INTEGER
  });
  return Note;
};
