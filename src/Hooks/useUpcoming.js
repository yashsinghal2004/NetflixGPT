import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../Utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((state) => state.movies.TopRated);
  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options,
    );

    const json = await data.json();
    //console.log(json?.results);
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    !upcoming && fetchMovies();
  }, []);
};
export default useTopRated;
