import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function MovieItemDetail() {

    const history = useHistory();
    const movieList = useSelector(store => store);

    const goBack = () => {
        console.log('clicked Go Back button')
    }

    return (
        <div className='detailsPage'>
            <h1>Details page!</h1>
            <h1>{JSON.stringify(movieList)}</h1>

            <button onClick={() => goBack()}>Go Back</button>
        </div>
    )
}

export default MovieItemDetail;