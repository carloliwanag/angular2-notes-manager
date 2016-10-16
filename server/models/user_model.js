var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var User = sequelize.define('User', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  });
  return User;
};
