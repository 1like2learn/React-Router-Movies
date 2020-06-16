import React from 'react';
import {NavLink} from 'react-router-dom'
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
        <NavLink className='home-button' to={'/'}>Home</NavLink>
  </div>
);

export default SavedList;
