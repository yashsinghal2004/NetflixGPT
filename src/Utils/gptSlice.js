import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    Searchgpt: false,
  },
  reducers: {
    ChangeSearchState: (state) => {
      state.Searchgpt = !state.Searchgpt;
    },
  },
});
export const { ChangeSearchState } = gptSlice;
export default gptSlice.reducer;
