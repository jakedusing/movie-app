import PropTypes from "prop-types";

// Define the MovieCard component, which accepts a "movie" object and "onClick" function as props
const MovieCard = ({ movie, onClick, onToggleFavorite, isFavorite }) => {
  return (
    <div
      className="movie-card p-4 border border-gray-300 rounded-lg hoverL:shadow-xl cursor-pointer"
      onClick={() => onClick(movie.imdbID)}
    >
      {/* Display the movie poster */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      {/* Display the movie title */}
      <h3 className="text-lg font-semibold">{movie.Title}</h3>
      {/* Display the movie release year */}
      <p className="text-gray-600">{movie.Year}</p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent movie card click
          onToggleFavorite(movie);
        }}
        className={`mt-4 p-2 rounded ${
          isFavorite ? "bg-red-500" : "bg-blue-500"
        } text-white`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
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
