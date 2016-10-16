var _ = require('lodash');

// var db = require('../db/sequelize-config.js');
// var Note = db.Note;

module.exports = function (app, db) {

  var Note = db.Note;

  app.post('/api/notes', function (req, res) {

    var note = Note.build({
      subject: req.body.subject,
      body: req.body.body,
      version: 1,
      UserId: req.body.userId
    });
    note.save().then(function () {
      res.json({
        respCode: '000',
        message: 'Note successfully created.',
        note: note
      });
    }).catch(function() {
      res.status(367).json({
        respCode: '367',
        message: 'Error encountered while creating note.'
      });
    });

  });
  

  app.get('/api/notes/user/:user_id', function (req, res) {
    Note.findAll({ where: { UserId: req.params.user_id } }).then(function (notes) {
      if (!notes) {
        notes = [];
      }
      res.json({
        respCode: '000',
        notes: notes
      });
    })

  });

  app.get('/api/notes/:noteId', function (req, res) {
    Note.find({ where: { id: req.params.noteId } }).then(function (note) {
      if (note) {
        res.json({
          respCode: '000',
          note: note
        });
      } else {
        res.status(343).json({
          respCode: '343',
          message: 'Note does not exists.'
        });
      }
    });
  });

  app.put('/api/notes/:noteId', function (req, res) {
    var noteId = req.params.noteId;
    Note.find({ where: { id: noteId } }).then(function (note) {
      if (note) {
        // check if contents has changed
        if (note.body != req.body.body) {
          var version = note.version;
          version++;
          Note.update({
            body: req.body.body,
            version: version
          }, {
              where: { id: noteId }
            }).then(function () {
              res.json({
                respCode: '000',
                message: 'Note was successfully updated',
                note: note
              });
            });
        } else {
          res.json({
            respCode: '000',
            message: 'Note has no updates.',
            note: note
          });
        }
      } else {
        res.status(343).json({
          respCode: '343',
          message: 'Note does not exists.'
        });
      }
    });
  });

  app.delete('/api/notes/:noteId', function (req, res) {
    var noteId = req.params.noteId;
    Note.find({ where: { id: noteId } }).then(function (note) {
      if (note) {
        Note.destroy({
          where: { id: noteId }
        }).then(function () {
          res.json({
            respCode: '000',
            message: 'Note deleted.'
          });
        })
      } else {
        res.status(343).json({
          respCode: '343',
          message: 'Note does not exists.'
        });
      }
    });
  });
}