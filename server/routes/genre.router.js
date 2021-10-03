const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// router.get('/selected-movie-genre/:id', (req,res) => { //UPDATED
//   const queryText = `ARRAY_AGG("name") FROM "genres"
//   JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
//   JOIN "movies" ON "movies_genres"."movie_id" = "movies"."id"
//   WHERE "movies"."id" = $1
//   GROUP BY "movies"."id";`;
//   pool.query(queryText, [req.params.id])
//   .then((result) => {res.send(result.rows[0]); })
//   .catch((error) => {
//     console.log('error on server side SELECTED MOVIE GENRE details', error)
//     res.sendStatus(500);
//   });
// }); //UPDATED


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