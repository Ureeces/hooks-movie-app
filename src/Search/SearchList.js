import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const SearchList = ({ movieResults }) => {
  const showMovieList = () => {
    return movieResults.map((item, i) => {
      return (
        <li key={i}>
          <img src={item.Poster} alt="some good movie" />
          <Link
            to={{
              pathname: `${item.imdbID}`,
              search: `?title=${item.Title}`,
            }}
          >
            {item.Title}
          </Link>
        </li>
      );
    });
  };

  return <ul className="results">{showMovieList()}</ul>;
};

export default SearchList;
