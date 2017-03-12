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
    //   res.send(seminars.toJSON());
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