import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../Utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const toprated = useSelector((state) => state.movies.TopRated);
  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options,
    );

    const json = await data.json();
    //console.log(json?.results);
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    !toprated && fetchMovies();
  }, []);
};
export default useTopRated;
