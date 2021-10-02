const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
  const genresQuery= `SELECT * FROM "genres" ORDER BY "name";`;
  pool.query(genresQuery)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR getting all genres (genre.router.js)', err);
      res.sendStatus(500)
    })
});




module.exports = router;