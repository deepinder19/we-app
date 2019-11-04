import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MoviesList}></Route>
        <Route path="/movie/:movieId" component={MovieDetails}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
