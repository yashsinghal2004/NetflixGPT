import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlaying);

  if (movies === null) return;
  const mainMovie = movies[0];
  console.log(mainMovie);

  return (
    <div>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      <Videobackground movieid={mainMovie.id} />
    </div>
  );
};
export default MainContainer;
