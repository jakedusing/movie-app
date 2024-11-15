import PropTypes from "prop-types";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      className="movie-card p-4 border border-gray-300 rounded-lg hoverL:shadow-xl cursor-pointer"
      onClick={() => onClick(movie.imdbID)}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{movie.Title}</h3>
      <p className="text-gray-600">{movie.Year}</p>
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
};

export default MovieCard;
