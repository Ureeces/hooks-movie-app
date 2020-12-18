import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = ({
  Title,
  Year,
  Rated,
  Released,
  Runtime,
  Genre,
  Actors,
  Poster,
  imdb,
}) => {
  return (
    <div>
      <img src={Poster} />
      <div>
        <ul>
          <li>Title: {Title}</li>
          <li>Year: {Year}</li>
          <li>Rated: {Rated}</li>
          <li>Released: {Released}</li>
          <li>Runtime: {Runtime}</li>
          <li>Genre: {Genre}</li>
          <li>Actors: {Actors}</li>
          <li>
            IMDB: <a href={`https://www.imdb.com/title/${imdb}/`}>{Title}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
