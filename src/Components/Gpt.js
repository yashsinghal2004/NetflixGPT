import { NETFLIX_BG } from "../Utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearch from "./GptSearch";

const Gpt = () => {
  return (
    <div className="">
      <img
        src={NETFLIX_BG}
        alt="background"
        className="fixed h-screen object-cover md:w-screen"
      />
      <div>
        <GptSearch />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};
export default Gpt;
