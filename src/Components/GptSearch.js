import { useSelector } from "react-redux";
import { NETFLIX_BG } from "../Utils/constants";
import lang from "../Utils/languageConstants";
import { useRef } from "react";
import openai from "../Utils/openai";
const GptSearch = () => {
  const language = useSelector((store) => store.config.language);

  const Searchtext = useRef(null);

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
    console.log(GptResults);
  };
  return (
    <div className="">
      <img src={NETFLIX_BG} alt="background" className="absolute" />
      <div className="absolute bg-white bg-opacity-40 w-8/12  my-40 mx-auto left-0 right-0 rounded-lg ">
        <form
          className=" bg-black bg-opacity-10   rounded-lg  flex m-4 "
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
    </div>
  );
};
export default GptSearch;
