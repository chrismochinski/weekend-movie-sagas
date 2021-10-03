import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//saga - ROOT
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    // yield takeEvery('FETCH_MOVIE_GENRES', fetchMovieGenres); //updated
}

//SAGA - GET ALL movies
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie/');
        console.log('get all(index.js):', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch (error) {
        console.error('get all error:', error);
    }
}

//SAGA - GET ALL genres
function* fetchAllGenres() {
    // get all genres from the DB
    try {
        const genres = yield axios.get('/api/genre/');
        console.log('get all genres(index.js):', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });
    } catch (error) {
        console.error('get all error:', error);
    }
}

//SAGA - GET DETAILS
function* fetchMovieDetails(action) {
    try {
        console.log('fetch movie details index.js action:', action)
        const selectedMovie = action.payload;
        console.log('selectedMovie on index.js is:', selectedMovie);
        const movieDetails = yield axios.get(`/api/movie/movie-details/${selectedMovie.id}`);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: movieDetails.data })
    } catch (error) {
        console.log('error in fetchMovieDetails:', error)
    }
}

// function* fetchMovieGenres(action) { //updated
//     try {
//         console.log('fetch SELECTED movie genres in index.js', action)
//         const selectedMovie = action.payload;
//         console.log('selectedMovieGenre on index.js is:', selectedMovie);
//         const selectedMovieGenre = yield axios.get(`/api/genre/selected-movie-genre/${selectedMovie.id}`);
//         yield put({ type: 'SET_SELECTED_MOVIE_GENRE', payload: selectedMovieGenre.data })
//     } catch (error) {
//         console.log('error in fetchMovieDetails:', error)
//     }
// }

//reducer NEW - for //SAGA GET DETAILS
const selectedMovie = (state = {}, action) => { //empty object for now, will load and display on MovieItemDetail.jsx
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload
        default:
            return state;
    }
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// // Used to store the movie genres
// const selectedGenreReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_SELECTED_MOVIE_GENRE':
//             return action.payload; //updated this should be JUST selected genres
//         default:
//             return state;
//     }
// }

// REDUCER for MOVIES
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// REDUCER for GENRES
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
        // selectedGenreReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
