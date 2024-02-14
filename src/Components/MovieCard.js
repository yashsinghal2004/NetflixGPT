import { POSTER_URL } from "../Utils/constants";

const MovieCard = ({ PosterPath }) => {
  if (!PosterPath) {
    return;
  }
  return (
    <div className="w-36 md:w-36 pl-3 ">
      <div className="">
        <img
          src={POSTER_URL + PosterPath}
          alt="Movie Poster"
          className="ml-2"
        />
      </div>
    </div>
  );
};
export default MovieCard;
