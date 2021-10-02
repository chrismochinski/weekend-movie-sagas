import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

import { useHistory } from 'react-router-dom';
import MovieItemDetail from './MovieItemDetail';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleMovieClick = (movie) => {
        console.log('clicked on', movie.title)
        history.push('/movie-details');
    }
    // both the movie title and poster have the same click handler

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="clickableMoviePoster" key={movie.id}  >
                            <h3 onClick={() => handleMovieClick(movie)}>{movie.title}</h3>
                            <img onClick={() => handleMovieClick(movie)} src={movie.poster} alt={movie}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;