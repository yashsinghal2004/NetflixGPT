import { POSTER_URL } from "../Utils/constants";

const MovieCard = ({ moviePath }) => {
  if (!moviePath) {
    return;
  }
  return (
    <div className="w-36 pl-2">
      <div>
        <img src={POSTER_URL + moviePath} alt="Movie Poster" className="ml-2" />
      </div>
    </div>
  );
};
export default MovieCard;
