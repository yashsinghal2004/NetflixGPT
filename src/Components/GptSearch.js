import { useSelector } from "react-redux";
import { NETFLIX_BG } from "../Utils/constants";
import lang from "../Utils/languageConstants";
const GptSearch = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="">
      <img src={NETFLIX_BG} alt="background" className="absolute" />
      <div className="absolute bg-white bg-opacity-40 w-8/12  my-40 mx-auto left-0 right-0 rounded-lg ">
        <form className=" bg-black bg-opacity-10   rounded-lg  flex m-4 ">
          <input
            type="text"
            placeholder={lang[language].gptsearchplaceholder}
            className=" p-2 rounded-lg bg-black py-3 hover:bg-opacity-80 text-white w-full "
          />
          <button
            type="submit"
            className="bg-red-600 text-white rounded-lg px-8 ml-3"
          >
            {lang[language].search}
          </button>
        </form>
      </div>
    </div>
  );
};
export default GptSearch;
