import { useHistory } from 'react-router-dom';


function MovieItemDetail() {

    const history = useHistory();

    const goBack = () => {

    }

    return (
        <div className='detailsPage'>
            <h1>Details page!</h1>

            <button onClick={() => navBack()}>Back To List</button>
        </div>
    )
}

export default MovieItemDetail;