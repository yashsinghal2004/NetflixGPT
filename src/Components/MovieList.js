import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="overflow-x-scroll bg-black">
      <h1 className="p-3 pt-6 ml-2 text-white font-bold text-lg">
        Now Playing
      </h1>
      <div className="flex  ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} moviePath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
