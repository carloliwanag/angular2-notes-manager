var _ = require('lodash');

// var db = require('../db/sequelize-config.js');


module.exports = function (app, db) {

  var User = db.User;
  


  /* register user */
  app.post('/api/users', function (req, res) {

    var userParam = req.body;

    /* Check if username exists */
    User.find({ where: { username: userParam.username } })
      .then(function (user) {
        if (user) { // if username exists,           
          res.status(301).json({
            respCode: '301',
            message: 'Username already exists.'
          });
          res.end();
        } else { // create user

          var user = User.build({
            username: userParam.username,
            password: userParam.password,
            firstName: userParam.firstName,
            lastName: userParam.lastName,
          });

          user.save().then(function() {
            res.json({
              respCode: '000',
              message: 'You successfully registered.',
              user: user
            });
          }).error(function() {
            res.status(332).json({
              respCode: '332',
              message: 'Sorry, try again later.'
            });
          });
        }

        
      })
      .error(function () {

          res.status(334).json({
            respCode: '334',
            message: 'Sorry, try again later.'
          });
      });


  });


  app.post('/api/users/authenticate', function (req, res) {

    var userParam = req.body;

    User.find({ where: { username: userParam.username } }).then(function(user) {
      if (user) {
        if (user.password == userParam.password) {
          res.json({
            respCode: '000',
            message: 'Successfully authenticated.',
            user: user
          });      
        } else {

          res.status(304).json({
            respCode: '304',
            message: 'Password does not match.'
          });
        }
      } else {
        res.status(303).json({
            respCode: '303',
            message: 'Username does not exists.'
        });
      }
    });


    
  });
}