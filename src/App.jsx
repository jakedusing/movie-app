import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { fetchMovies, fetchMovieDetails } from "./services/api";

const App = () => {
  const [movies, setMovies] = useState([]); // State to hold the list of movies returned from the search
  const [selectedMovie, setSelectedMovie] = useState(null); //State to hold the details of the currently selected movie
  const [loading, setLoading] = useState(false); //State to hold the loading state
  const [favorites, setFavorites] = useState(() => {
    // Load favorites from LocalStorage when the app initializes
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to handle the search operation
  const handleSearch = async (query) => {
    // call the fetchMovies function with the search query
    const results = await fetchMovies(query);
    // Update the state with the search results (array of movies)
    setMovies(results);
    // Stop loading
    setLoading(false);
  };

  // function to handle when a user clicks on a movie card
  const handleClickMovie = async (id) => {
    // call the fetchMovieDetails function with the movie's ID
    const details = await fetchMovieDetails(id);
    // Update the state witht he movie's detailed information
    setSelectedMovie(details);
    // Stop loading
    setLoading(false);
  };

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      // Check if the movie is already in the favorites list
      if (prevFavorites.some((fav) => fav.imdbID === movie.imdbID)) {
        // if it is, remove it (filter out the movie)
        return prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
      } else {
        // if it's not, add it to the list
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <div className="app container mx-auto p-4">
      {/*  Render the selected movie's details if a movie is selected*/}
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
      {/*  Render the SearchBar component*/}
      <SearchBar onSearch={handleSearch} />

      {/* Conditionally render favorites section */}
      {favorites.length > 0 && (
        <div className="favorites-container border border-gray-300 rounded-lg shadow-lg p-4 mt-8 mb-12">
          <h2 className="text-2xl font-semibold my-6">Favorite Movies</h2>
          <MovieList
            movies={favorites}
            onClickMovie={handleClickMovie}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </div>
      )}

      {/* Section to display search results */}
      {loading ? ( // Conditional rendering for loading
        <div className="text-center my-6 text-blue-500">Loading...</div>
      ) : (
        /*  Render the MovieList component*/
        <MovieList
          movies={movies}
          onClickMovie={handleClickMovie}
          onToggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default App;
