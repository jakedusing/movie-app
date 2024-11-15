import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

// Define the MovieList component, which accepts an array of movies and an onClickMovie function as props
const MovieList = ({ movies, onClickMovie, onToggleFavorite, favorites }) => {
  return (
    // Wrapper div for the list of movies, styled as a responsive grid
    <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Map over the movies array to create a MovieCard for each movie */}
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={onClickMovie}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)} // check if the movie is a favorite
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired, // imdbID must be a string
      Poster: PropTypes.string.isRequired, // Poster must be a string
      Title: PropTypes.string.isRequired, // Title must be a string
      Year: PropTypes.string.isRequired, // Year must be a string
    })
  ).isRequired, // movies must be an array of movie objects
  onClickMovie: PropTypes.func.isRequired, // onClickMovie must be a function
  onToggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
