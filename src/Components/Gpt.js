import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearch from "./GptSearch";

const Gpt = () => {
  return (
    <div className="">
      <div>
        <GptSearch />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};
export default Gpt;
