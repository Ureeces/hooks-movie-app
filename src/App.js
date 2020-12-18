import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Search from "./Search/Search";
import Movie from "./Movie/Movie";

const AppNav = () => {
  const [searchValue, setSearchValue] = useState("");

  const [movieResults, setMovieResults] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  const fetchMovieList = async (inputValue) => {
    setSearchValue(inputValue);

    if (!searchValue) {
      setIsFetching(false);
      return;
    }

    const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${inputValue}`
      );

      const data = await response.json();

      console.log(data.Search);

      if (!data.Error) {
        setIsFetching(true);
        setMovieResults(data.Search);
      }

      // setMovieResults(data.Search || [])'
    } catch (e) {}
  };

  return (
    <div className="App">
      <Search
        searchValue={searchValue}
        fetchMovieList={fetchMovieList}
        movieResults={movieResults}
        isFetching={isFetching}
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppNav} />
        <Route path="/:movieTitle" component={Movie} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </Router>
  );
};

export default App;
