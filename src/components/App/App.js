import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieItemDetail from '../MovieList/MovieItemDetail'
import AddMovie from '../AddMovie/AddMovie.jsx' 
import Header from '../Header/Header.jsx';



function App() {
  return (
    <div className="App">

    <Header />

      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route exact path='/movie-details'>
          <MovieItemDetail />
        </Route>

        <Route exact path="/add-movie">
          <AddMovie />
        </Route>

      </Router>
    </div>
  );
}


export default App;
