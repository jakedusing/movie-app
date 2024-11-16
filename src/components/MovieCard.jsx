import PropTypes from "prop-types";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// Define the MovieCard component, which accepts a "movie" object and "onClick" function as props
const MovieCard = ({ movie, onClick, onToggleFavorite, isFavorite }) => {
  return (
    <div
      className="movie-card relative p-4 border border-gray-300 rounded-lg hoverL:shadow-xl cursor-pointer"
      onClick={() => onClick(movie.imdbID)}
    >
      {/* Display the movie poster */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-auto object-cover mb-4 rounded"
      />
      {/* Display the movie title */}
      <h3 className="text-lg font-semibold">{movie.Title}</h3>
      {/* Display the movie release year */}
      <p className="text-gray-600">{movie.Year}</p>

      {/* Heart Icon for Favorites */}
      <div
        className="absolute bottom-4 right-4 text-2xl cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click from triggering movie card click
          onToggleFavorite(movie);
        }}
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" /> // Filled heart for favorited
        ) : (
          <FaRegHeart className="text-gray-500" /> // Empty heart for not favorited
        )}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired, // imdbID should be a required string
    Poster: PropTypes.string.isRequired, // Poster shoul dbe a required string
    Title: PropTypes.string.isRequired, // Title should be a required string
    Year: PropTypes.string.isRequired, // Year should be a required string
  }).isRequired, // The entire movie object is required
  onClick: PropTypes.func.isRequired, // onClick should be a required function
  onToggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired, // new prop to track favorite status
};

export default MovieCard;
