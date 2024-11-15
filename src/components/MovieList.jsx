import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onClickMovie }) => {
  return (
    <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onClick={onClickMovie} />
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
};

export default MovieList;
