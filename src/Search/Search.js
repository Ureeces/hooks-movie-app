import React from "react";
import SearchList from "./SearchList";
import "./Search.css";

const Search = ({ searchValue, fetchMovieList, movieResults, isFetching }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => fetchMovieList(e.target.value)}
      />

      {/* 'Long' Way (only works if nothing is supposed to show when condition isn't met) */}
      {/* { searchValue !== "" ? <SearchList /> : ""} */}
      {searchValue !== "" && isFetching && (
        <SearchList movieResults={movieResults} />
      )}
    </div>
  );
};

export default Search;
