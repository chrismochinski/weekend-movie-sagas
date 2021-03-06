const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET ALL MOVIES
router.get('/', (req, res) => {
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

// get relevant movie details for USER-SELECTED movie
router.get('/movie-details/:id', (req,res) => {
  const queryText = `SELECT "movies"."id", "description", "poster", "title" FROM "genres"
  JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
  JOIN "movies" ON "movies_genres"."movie_id" = "movies"."id"
  WHERE "movies"."id" = $1
  GROUP BY "movies"."id";`;
  pool.query(queryText, [req.params.id])
  .then((result) => {res.send(result.rows[0]); }) //.then is a "promise" ("you'd better come back here with this!") on success (done with query? do this...)
  .catch((error) => {                             //.catch is also a promise if anything goes boom boom 
    console.log('error on server side movie details', error)
    res.sendStatus(500);
  });
});

// Add movie route
router.post('/', (req, res) => {
  console.log('INCOMING req.body on router:', req.body); //added to confirm req.body
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;