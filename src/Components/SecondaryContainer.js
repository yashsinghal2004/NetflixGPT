import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlaying);
  if (!movies) {
    return;
  }

  return (
    <div>
      <MovieList movies={movies} />
      <MovieList movies={movies} />
      <MovieList movies={movies} />
      <MovieList movies={movies} />
    </div>
  );
};
export default SecondaryContainer;
