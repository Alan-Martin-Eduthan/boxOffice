import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("marvel");

  const getMovies = async (query) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=2e9249c3`
      );
      setMovies(data.Search); // Assuming data.Search contains the list of movies
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.elements["search"].value;
    setSearchTerm(input);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="heading-1">Movies</h1>
        <form onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Search for movies..." />
          <button type="submit">Search</button>
        </form>
      </header>
      <main className="main">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </main>
    </div>
  );
}

export default App;
