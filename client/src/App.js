import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          console.log(response)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list = {savedList} />
      <Route path = {'/'}>
        <MovieList movies = {movieList}/>
      </Route>
      <Route path = {`/movies/${movieList.id}`}>
        <Movie id={movieList.id}/>
      </Route>
    </div>
  );
};

export default App;
