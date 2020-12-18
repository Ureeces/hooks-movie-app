import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import MovieDetails from "./MovieDetails";
const Movie = () => {
  const { search } = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const movie = queryString.parse(search);
  console.log(search);

  const { movieTitle } = useParams();

  console.log(movieTitle);

  const fetchMovieDetails = async () => {
    try {
      const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&t=${movie.title}`
      );

      const data = await response.json();

      data.imdb = movieTitle;

      setMovieDetails(data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <div>
      <MovieDetails {...movieDetails} />
    </div>
  );
};

export default Movie;
