import { NETFLIX_BG } from "../Utils/constants";
const GptSearch = () => {
  return (
    <div className=" outline-white">
      <img src={NETFLIX_BG} alt="background" className="absolute" />
      <form className="absolute bg-black bg-opacity-10 w-7/12 my-40 mx-auto left-0 right-0 rounded-lg  flex">
        <input
          type="text"
          placeholder="What do you want to watch today?"
          className="w-full p-2 rounded-full bg-black py-3 hover:bg-opacity-80 text-white"
        />
        <button
          type="submit"
          className="bg-red-600 text-white ml-4 rounded-full px-8"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default GptSearch;
