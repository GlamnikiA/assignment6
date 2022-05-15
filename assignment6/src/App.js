import './App.css';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';
import React, { useState } from 'react'

function App() {
  const [movies, setMovies] = useState([]);

  function sortAlpha() {
    let sorted = [].concat(movies)
    .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);

    setMovies(sorted);
  }

  function sortRating() {
    let sorted = [].concat(movies)
    .sort((a, b) => b.rating - a.rating);

    setMovies(sorted);
  }

  return (
    <div className='container mt-5'>
      <h1>Min filmlista</h1>
      <h2>Lägg till en film</h2>
      <AddMovieForm setMovie={setMovies} movies={movies} />
      <MovieList setMovie={setMovies} movies={movies}/>
      <button className="btn btn-primary mt-4" onClick={() => sortAlpha()}>Alfabetisk ordning</button>
      <button className="btn btn-primary mt-4 mx-3" onClick={() => sortRating()}>Betygsordning</button>
    </div>
  );
}

export default App;
