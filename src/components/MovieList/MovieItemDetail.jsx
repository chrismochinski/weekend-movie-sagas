import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function MovieItemDetail() {

    const movieDetails = useSelector(store => store.selectedMovie);
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    }

    return (
        <div className='detailsPage'>
            <h1>Details for {movieDetails.title}!</h1>
            <img width="300px" src={movieDetails.poster} />
            <h3>{movieDetails.description}</h3>
            <h2>Genres:</h2>
            <h4>GENRES GO HERE:</h4>
            <h3>genres</h3>
            <button onClick={() => goBack()}>Go Back</button>
        </div>
    )
}

export default MovieItemDetail;