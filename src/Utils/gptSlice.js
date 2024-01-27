import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    Searchgpt: false,
    GptMovieNames: null,
    TmdbResults: null,
  },
  reducers: {
    ChangeSearchState: (state, action) => {
      state.Searchgpt = !state.Searchgpt;
    },
    addGptResult: (state, action) => {
      const { GptMovieNames, TmdbResults } = action.payload;
      state.GptMovieNames = GptMovieNames;
      state.TmdbResults = TmdbResults;
    },
  },
});

export const { ChangeSearchState, addGptResult } = gptSlice.actions;
export default gptSlice.reducer;
