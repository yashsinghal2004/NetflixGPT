import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../Utils/constants";
import { addTrailer } from "../Utils/moviesSlice";
import { useSelector } from "react-redux";
import useTrailer from "../Hooks/useTrailer";
const Videobackground = ({ movieid }) => {
  useTrailer(movieid);
  const trailerfromstore = useSelector((store) => store.movies.Trailer);
  if (!trailerfromstore) return null;

  //console.log(trailerfromstore.key);

  return (
    <div className="w-screen aspect-[16/9]">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerfromstore?.key +
          "?si=G00legvSKpkov81o" +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Videobackground;
