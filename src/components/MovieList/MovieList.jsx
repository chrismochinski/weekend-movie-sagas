import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

import { useHistory } from 'react-router-dom';
import MovieItem from './MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movies = useSelector(store => store.movies);

    useEffect(() => {
        console.log('Page loaded. Fetching movies:', movies)
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <MovieItem movie={movie} />
                        </div>
                    )
                })}
            </section>
        </main>

    );
}

export default MovieList;