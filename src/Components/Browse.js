import React from "react";
import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
