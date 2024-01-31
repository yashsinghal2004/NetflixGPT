import React from "react";
import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import usePopular from "../Hooks/usePopular";
import Gpt from "./Gpt";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  const Searchgpt = useSelector((store) => store.gpt.Searchgpt);

  return (
    <div>
      <Header />
      {Searchgpt ? (
        <Gpt />
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
