import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddMovie from './AddMovie/AddMovie.jsx'

import { useHistory } from 'react-router-dom';
// import MovieItem from './MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movies = useSelector(store => store.movies);

    useEffect(() => {
        console.log('Page loaded. Fetching movies:', movies)
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
        dispatch({ type: 'FETCH_MOVIE_DETAILS' });
    }, []);


    const handleMovieClick = (movie) => {
        console.log(`clicked movie id: ${movie.id}, ${movie.title}`)
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movie })
        history.push('/movie-details'); //idea we need to delay this...
    }



    return (
        <main>


            <h1>MovieList</h1>


            {/* <Router>
                <Link to="/AddMovie">Add Movie</Link>
                <Route exact path="/AddMovie"> */}
                    <AddMovie />
                {/* </Route>
            </Router> */}

            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <div className="clickableMoviePoster" key={movie.id} >
                                <h3 onClick={() => handleMovieClick(movie)}>{movie.title}</h3>
                                <img onClick={() => handleMovieClick(movie)} src={movie.poster} alt={movie} />
                            </div>
                        </div>
                    )
                })}
            </section>


        </main>

    );
}

export default MovieList;