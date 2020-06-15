import React from 'react';
import { useHistory } from 'react-router-dom'

const MovieList = props => {
  return (
    <div className="movie-list" >
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  const history = useHistory()
  const urlChange = () => {
    history.push(`/movies/${id}`)
  }
  return (
    <div className="movie-card" onClick={urlChange}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
