import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function MovieItemDetail() {



    const movieDetails = useSelector(store => store.selectedMovie);
    const genreArray = useSelector(store => store.selectedMovie.array_agg)
    const history = useHistory();



    console.log('movie detail:', movieDetails);
    console.log('genre details:', genreArray);

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
            <h1>{genreArray}</h1>
               {/* <ul>
                   {genreArray.map((genre) => (
                       <li>{genre}</li>
                   ))}
               </ul> */}
            
            
            <button onClick={() => goBack()}>Go Back</button>
        </div>
    )
}

export default MovieItemDetail;