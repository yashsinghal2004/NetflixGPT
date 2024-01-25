import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    Searchgpt: false,
  },
  reducers: {
    ChangeSearchState: (state, action) => {
      state.Searchgpt = !state.Searchgpt;
    },
  },
});

export const { ChangeSearchState } = gptSlice.actions;
export default gptSlice.reducer;
