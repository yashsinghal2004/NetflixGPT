import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";
import { useSelector } from "react-redux";
import useNowPlaying from "../Hooks/useNowPlaying";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlaying);

  if (!movies) return;
  const mainMovie = movies[0];
  //console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-36 md:pt-0 bg-black bg-gradient-to-r from-black">
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground movieid={id} />
    </div>
  );
};
export default MainContainer;
