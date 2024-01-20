import { POSTER_URL } from "../Utils/constants";

const MovieCard = ({ moviePath }) => {
  return (
    <div className="w-36 pl-2 bg-black">
      <img src={POSTER_URL + moviePath} alt="Movie Poster" className="ml-2" />
    </div>
  );
};
export default MovieCard;
