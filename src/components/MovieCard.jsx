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

export default MovieCard;
