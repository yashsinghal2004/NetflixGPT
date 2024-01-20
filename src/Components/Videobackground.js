import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../Utils/constants";
import { addTrailer } from "../Utils/moviesSlice";
import { useSelector } from "react-redux";
const Videobackground = () => {
  const trailerfromstore = useSelector((store) => store?.movies?.Trailer);

  const dispatch = useDispatch();
  const fetchTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/955916/videos?language=en-US",
      options,
    );
    const json = await data.json();
    console.log(json);
    const Trailer = (json?.results).filter((video) => video.type === "Trailer");
    const MainTrailer = Trailer.length ? Trailer[0] : json.results[0];
    console.log(MainTrailer);
    dispatch(addTrailer(MainTrailer));
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  //console.log(trailerfromstore.key);

  return (
    <div>
      <iframe
        className="w-full h-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailerfromstore?.key +
          "?si=G00legvSKpkov81o"
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
