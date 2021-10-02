import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import MovieItemDetail from './MovieItemDetail';


function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();


    const handleMovieClick = (movie) => { //updated
        history.push('/movie-details');
    }
    // both the movie title and poster have the same click handler

    return (
        <div>

            <div className="clickableMoviePoster" key={movie.id}  >
                <h3 onClick={() => handleMovieClick(movie)}>{movie.title}</h3>
                <img onClick={() => handleMovieClick(movie)} src={movie.poster} alt={movie} />
            </div>
        </div>
    )
}

export default MovieItem;