import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddMovie() {

    const genresArray = useSelector(store => store.genres) //bringing in whole store
    const history = useHistory();

    // delcaring state of empty "new movie" that will be added
    let [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        poster: '',
        genre: '',
    })

    //checking store - works for now
    console.log('store is:', genresArray)

    // --------------------------------------------//
    //BELOW - handling form inputs and button confirm:
    // --------------------------------------------//


    //on click of confirm button


    const newMovieTitle = (event) => {
        console.log('event happened:', event);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, title: event.target.value })
    }
    const newMovieDescription = (event) => {
        console.log('event happened:', event);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, description: event.target.value })
    }
    const newMovieGenre = (event) => {
        console.log('event happened:', event);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, genre: event.target.value })
    }

    const newMoviePoster = (event) => {
        console.log('event happened:', event);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, poster: event.target.value })
    }

    const confirmAddMovie = () => {
        console.log('clicked confirm, newMovie is:', newMovie)
        clearInputs();
    }

    const clearInputs = () => {
    }

    const backToHome = () => {
        history.push('/');
    }
    return (

        <div>
            <h3>Enter new movie</h3>
            <form>

                <input type='text' placeholder='Title' onChange={newMovieTitle} /><br />
                <input type='text' placeholder='Image URL' onChange={newMoviePoster} /><br />
                <textarea type='text' placeholder='Description' onChange={newMovieDescription} /><br />


                <select onChange={newMovieGenre}>
                    {genresArray.map((genre) => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))};
                </select>


                <button type='submit' value='Add Movie' onClick={() => confirmAddMovie()}>Add Movie</button>
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

