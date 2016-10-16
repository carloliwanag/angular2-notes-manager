var app = require('../server/index');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('Notes API Test', function () {

  var user = {
    "username": "carloliwanag",
    "password": "carlo123",
    "firstName": "Carlo",
    "lastName": "Liwanag",
  };

  // it will be assumed that the user id and note id will be equal to 1
  var userId = noteId = 1;

  var note1 = {
    "userId": userId,
    "subject": "This is the first note.",
    "body": "The best note ever!"
  };

  before(function (done) {
    var db = require('../server/db/sequelize-config.js');

    /** delete the database content first */
    db.sequelize
      .sync({ force: true })
      .then(function (err) {
        request(app)
          .post('/api/users')
          .send(user)
          .end(function (err, res) {
            done();
          });
      }, function (err) {
        console.log('An error occurred while creating the table:', err);
        done();
      });
  });

  it('should create a note', function (done) {
    request(app)
      .post('/api/notes')
      .send(note1)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

  it('should get a note using a user id', function (done) {
    request(app)
      .get('/api/notes/user/' + userId)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);

        var response = JSON.parse(res.text);
        var notes = response.notes;
        var note = notes[0];

        expect(note.subject).to.be.equal(note1.subject);
        expect(note.body).to.be.equal(note1.body);
        expect(note.version).to.be.equal(1);

        done();
      });
  });

  it('should get a note using a note id', function (done) {
    request(app)
      .get('/api/notes/' + noteId)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);
        var note = JSON.parse(res.text);
        expect(note.note.subject).to.be.equal(note1.subject);
        expect(note.note.body).to.be.equal(note1.body);
        expect(note.note.version).to.be.equal(1);
        done();
      });
  });

  it('should update a note', function (done) {

    var newBody = "New Content of body";
    note1.body = newBody;

    request(app)
      .put('/api/notes/' + noteId)
      .send(note1)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);

        request(app)
          .get('/api/notes/' + noteId)
          .end(function (err, res) {
            expect(res.statusCode).to.be.equal(200);
            var note = JSON.parse(res.text);
            
            expect(note.note.subject).to.be.equal(note1.subject);
            expect(note.note.body).to.be.equal(note1.body);
            expect(note.note.version).to.be.equal(2);
            done();
          });

      });
  });


  it('should delete a note', function (done) {
    request(app)
      .delete('/api/notes/' + noteId)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);
        request(app)
          .get('/api/notes/' + noteId)
          .end(function (err, res) {
            expect(res.statusCode).to.be.equal(343);
            done();
          });
      });
  });

});