import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../Utils/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options,
    );

    const json = await data.json();
    //console.log(json?.results);
    dispatch(addNowPlaying(json?.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default useNowPlaying;
