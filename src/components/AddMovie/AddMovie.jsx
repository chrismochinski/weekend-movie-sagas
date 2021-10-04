import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMovie() {

    const genresArray = useSelector(store => store.genres) 
    const history = useHistory();
    const dispatch = useDispatch();

    // declaring state of empty "new movie" that will be added
    let [newMovie, setNewMovie] = useState({});

    const newMovieTitle = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, title: event.target.value });
    }

    const newMovieDescription = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, description: event.target.value });
    }

    const newMoviePoster = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, poster: event.target.value });
    }

    const newMovieGenre = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, genre_id: event.target.value });
    }

    const confirmAddMovie = (event) => {
        event.preventDefault();
        console.log('clicked confirm, newMovie is:', newMovie);
        dispatch({ type: 'ADD_MOVIE', payload: newMovie});
        setNewMovie({
            title: '', 
            description: '',
            poster: '', 
            genre_id: '' 
        })
    }

    const backToHome = () => {
        history.push('/');
    }


    return (

        <div>
            <h3>Enter new movie</h3>

            <form onSubmit={confirmAddMovie}>

                <input type='text' placeholder='Title' value={newMovie.title} onChange={newMovieTitle} /><br />
                <input type='text' placeholder='Image URL' value={newMovie.poster} onChange={newMoviePoster} /><br />
                <textarea type='text' placeholder='Description' value={newMovie.description} onChange={newMovieDescription} /><br />

                <select value={newMovie.genre_id} onChange={newMovieGenre}>
                    {genresArray.map((genre) => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))};
                </select>

                <button type='submit' value='Add Movie'>Add Movie</button>
            </form>


            <button type='submit' onClick={() => backToHome()}>Cancel</button>

            {/* the following is for testing purposes */}
            <ul>
                <li>{newMovie.title}</li>
                <li>{newMovie.description}</li>
                <li><img src={newMovie.poster} /></li>
                <li>{newMovie.genre}</li>
            </ul>

        </div>
    );
}

export default AddMovie;
