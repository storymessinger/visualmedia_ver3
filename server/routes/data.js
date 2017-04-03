const express = require('express');
const router = express.Router();

var bookshelf = require('../../bookshelf');

var Seminars = bookshelf.Model.extend({
  tableName: 'seminars'
});
router.get('/seminar', (req, res) => {
  new Seminars().fetchAll()
    .then(function(seminars) {
      res.status(200).json(seminars);
      // res.send(seminars.toJSON());
    })
    .catch(function(error) {
      res.send('An error occured');
    });
});

var People = bookshelf.Model.extend({
  tableName: 'people'
});
router.get('/all-data', (req, res) => {
  new Downloads().fetchAll()
    .then(function(data) {
      res.status(200).json(data);
      // res.send(seminars.toJSON());
    })
    .catch(function(error) {
      res.send('An error occured');
    });
});


var Downloads = bookshelf.Model.extend({
  tableName: 'downloads'
});
router.get('/downloads-data', (req, res) => {
  new Downloads().fetchAll()
    .then(function(data) {
      res.status(200).json(data);
      // res.send(seminars.toJSON());
    })
    .catch(function(error) {
      res.send('An error occured');
    });
});


var Issues = bookshelf.Model.extend({
  tableName: 'issues'
});
router.get(['/news','/media'], (req, res) => {
  new Issues().fetchAll()
    .then(function(data) {
      res.status(200).json(data);
      // res.send(data.toJSON());
    })
    .catch(function(error) {
      res.send('An error occured');
    });
});


var Publicate = bookshelf.Collection.extend({
  tableName: 'publications'
});
router.get(['/publicate-data', '/publicate/individual/:id', '/publicate_kr/individual/:id', '/thesis/individual/:id'], (req, res) => {
  new Publicate().fetch()
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(error) {
      res.send('An error occured');
    });
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;