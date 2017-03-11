const express = require('express');
const router = express.Router();

var bookshelf = require('../../bookshelf');

var Article = bookshelf.Model.extend({
  tableName: 'topic'
});

router.get('/posts', (req, res) => {
  new Article().fetchAll()
    .then(function(articles) {
      res.status(200).json(articles);
    //   res.send(articles.toJSON());
    }).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;