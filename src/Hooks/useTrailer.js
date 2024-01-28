import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../Utils/constants";
import { addTrailer } from "../Utils/moviesSlice";

const useTrailer = (movieid) => {
  const dispatch = useDispatch();
  const trailerfromstore = useSelector((store) => store.movies?.Trailer);

  const fetchTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
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
    !trailerfromstore && fetchTrailer();
  }, []);
  if (!movieid) return;
};
export default useTrailer;
