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
        <MovieList title="Popular" movies={movies?.Popular} />
        <MovieList title="Trending" movies={movies?.nowPlaying} />
        <MovieList title="Horror" movies={movies?.Popular} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
