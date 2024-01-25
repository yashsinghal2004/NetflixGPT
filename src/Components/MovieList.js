import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return;
  }
  return (
    <div className="   overflow-x-scroll ">
      <h1 className="p-2 pt-8 ml-2 text-white text-xl">{title}</h1>
      <div className="flex ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} moviePath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;