import React from "react";
import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import usePopular from "../Hooks/usePopular";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlaying();
  usePopular();
  const Searchgpt = useSelector((store) => store?.gpt?.Searchgpt);

  return (
    <div>
      <Header />
      {Searchgpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
