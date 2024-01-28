import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../Utils/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowplaying = useSelector((state) => state.movies.nowPlaying);
  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options,
    );

    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlaying(json.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default useNowPlaying;
