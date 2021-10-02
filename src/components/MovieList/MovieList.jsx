import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

import { useHistory } from 'react-router-dom';
import MovieItem from './MovieItem';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        console.log('Page loaded. Fetching movies:', movies)
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => (

                    <MovieItem movie={movie} />

                ))}
            </section>
        </main>

    );
}

export default MovieList;