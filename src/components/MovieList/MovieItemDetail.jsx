import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function MovieItemDetail() {

    const history = useHistory();

    const movieDetails = useSelector(store => store.selectedMovie);
    const genreReducerArray = useSelector(store => store.selectedGenreReducer);

    const goBack = () => { //navigate back to list page
        history.push('/');
    }

    return (
        <div className='detailsPage'>
            <h1>Details for {movieDetails.title}!</h1>
            <img width="300px" src={movieDetails.poster} />
            <p className="detailPageDescription">{movieDetails.description}</p>
            <h2>Genres:</h2>
            <ul>
                {genreReducerArray.map((genre) => (
                    <li key={genre.name}>{genre.name}</li>
                ))}
            </ul>
            <button onClick={() => goBack()}>Go Back</button>
        </div>
    )
}

export default MovieItemDetail;