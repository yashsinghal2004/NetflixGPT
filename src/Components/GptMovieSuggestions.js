import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { GptMovieNames, TmdbResults } = useSelector((store) => store.gpt);
  if (!GptMovieNames) return null;

  return (
    <div className="">
      <div className="absolute mt-80  bg-black w-screen bg-opacity-80">
        <div className="">
          {GptMovieNames.map((moviename, index) => (
            <MovieList
              key={moviename}
              title={moviename}
              movies={TmdbResults[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
