import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state?.movies);
  if (!movies) {
    return;
  }

  return (
    <div className="bg-black ">
      <div className=" md:-mt-[250px] relative z-50">
        <MovieList title="Now Playing" movies={movies?.nowPlaying} />
        <MovieList title="Top Rated" movies={movies?.TopRated} />
        <MovieList title="Popular" movies={movies?.Popular} />
        <MovieList title="Upcoming" movies={movies?.Upcoming} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
