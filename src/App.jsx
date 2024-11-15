import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { fetchMovies, fetchMovieDetails } from "./services/api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };

  const handleClickMovie = async (id) => {
    const details = await fetchMovieDetails(id);
    setSelectedMovie(details);
  };

  return (
    <div className="app container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} onClickMovie={handleClickMovie} />
      {selectedMovie && (
        <div className="movie-detail mt-8 p-6 border border-gray-300 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">{selectedMovie.Title}</h2>
          <p className="text-gray-700 mb-4">{selectedMovie.Plot}</p>
          <p className="mb-2">Released: {selectedMovie.Released}</p>
          <p>Rating: {selectedMovie.imdbRating}</p>
          <img
            src={selectedMovie.Poster}
            alt={selectedMovie.Title}
            className="mt-4 max-w-full rounded"
          />
        </div>
      )}
    </div>
  );
};

export default App;
