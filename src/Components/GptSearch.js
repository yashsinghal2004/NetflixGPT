import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_BG } from "../Utils/constants";
import lang from "../Utils/languageConstants";
import { useRef } from "react";
import openai from "../Utils/openai";
import { options } from "../Utils/constants";
import { addGptResult } from "../Utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";
const GptSearch = () => {
  const dispatch = useDispatch();

  const language = useSelector((store) => store.config.language);

  const Searchtext = useRef(null);

  const SearchTMDBMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options,
    );
    const json = await data.json();
    return json.results;
  };

  const SearchFromGpt = async () => {
    console.log(Searchtext.current.value);
    const Gptquery =
      "Act as a movie Recommendation system and suggest some movies for the query : " +
      Searchtext.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Ready, Shershaah, KGF2, Koi Mil Gaya";

    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: Gptquery }],
      model: "gpt-3.5-turbo",
    });
    //"gadar,raaj,ready,shershaah,kgf2,koi mil gaya"
    console.log(GptResults.choices[0]?.message?.content);

    //["gadar","ready","shershaah","kgf2","koi mil gaya"]
    const getMovies = GptResults.choices[0]?.message?.content.split(",");
    const MoviesPromises = getMovies.map((movie) => SearchTMDBMovies(movie)); //return promises of movies

    const moviesArray = await Promise.all(MoviesPromises); //return array of movies
    console.log(moviesArray);
    dispatch(
      addGptResult({ GptMovieNames: getMovies, TmdbResults: moviesArray }),
    );
  };
  return (
    <div className="">
      <img src={NETFLIX_BG} alt="background" className="fixed" />
      <div className=" absolute z-10 px-full  bg-white w-7/12 my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-50 ">
        <form
          className=" bg-black bg-opacity-10  rounded-lg  flex m-4 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={Searchtext}
            type="text"
            placeholder={lang[language].gptsearchplaceholder}
            className=" p-2 rounded-lg bg-black py-3 hover:bg-opacity-80 text-white w-full "
          />
          <button
            type="submit"
            className="bg-red-600 text-white rounded-lg px-8 ml-3"
            onClick={SearchFromGpt}
          >
            {lang[language].search}
          </button>
        </form>
      </div>
      <GptMovieSuggestions />
    </div>
  );
};
export default GptSearch;
