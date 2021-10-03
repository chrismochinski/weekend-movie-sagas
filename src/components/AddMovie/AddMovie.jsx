import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddMovie() {

    const genresArray = useSelector(store => store) //bringing in whole store
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
    const confirmAddMovie = () => {

    }

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


    const backToHome = () => {
        history.push('/');
    }
    return (

        <div>
            <h3>Enter new movie</h3>
            <form>

                <input type='text' placeholder='Title' onChange={newMovieTitle}/><br />
                <input type='text' placeholder='Image URL' onChange={newMoviePoster}/><br />
                <textarea type='text' placeholder='Description' onChange={newMovieDescription} /><br />


                {/* <select>
                    {props.genres.map((genre) => (
                        <option key={genre.id}>{genre}</option>
                    ))};
                </select> */}


                {/* The above, commented-out thing (and the very 
                similar one on
                my movie details page) frustrated me so badly that I may just
                accept a "needs reinforcement" on this weekend's assignment.
                I have now spent AT LEAST 10 hours on this 
                and have gotten no help beyond a few "yeah, that's super weird" 
                comments. I kind of thought I was in a better place with this
                stuff but clearly I am behind.
                I'm aware that the following dropdown setup is
                not what Prime is looking for. */}

                <select id="selectGenre" onChange={newMovieGenre}>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musial">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
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

