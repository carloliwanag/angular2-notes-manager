var app = require('../server/index');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('User API Test', function () {


  before(function (done) {
    var db = require('../server/db/sequelize-config.js');

    /** delete the database content first */
    db.sequelize
      .sync({ force: true })
      .then(function (err) {
        done();
      }, function (err) {
        console.log('An error occurred while creating the table:', err);
        done();
      });
    
  });

  var user = {
    "username": "carloliwanag",
    "password": "carlo123",
    "firstName": "Carlo",
    "lastName": "Liwanag"
  };



  it('should invalidate an unregistered user', function (done) {
    request(app)
      .post('/api/users/authenticate')
      .send(user)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(303);
        done();
      });
  });

  it('should register a user', function (done) {
    request(app)
      .post('/api/users')
      .send(user)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);
        expect(res).to.be.json;
        done();
      });
  });

  it('should validate a registered user', function (done) {
    request(app)
      .post('/api/users/authenticate')
      .send(user)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

});