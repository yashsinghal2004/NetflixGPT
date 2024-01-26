import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../Utils/moviesSlice";

const usePopular = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      options,
    );

    const json = await data.json();
    //console.log(json?.results);
    dispatch(addPopular(json?.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default usePopular;
