import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);


    useEffect(() => {
        // console.log('Page loaded. Fetching movies:', movies)
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });  //idea
        // console.log('genres passed in as:', genres)
    }, []);

    const goToMoviePage = () => {
        history.push('/add-movie'); 
    };



    const handleMovieClick = (movie) => {
        // console.log(`clicked movie id: ${movie.id}, ${movie.title}`)
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movie })
        history.push('/movie-details'); //idea we need to delay this...
    };

  

    return (
        <main>


            <h1>MovieList</h1>
           
            <button onClick={() => goToMoviePage()}>Add Movie</button>

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