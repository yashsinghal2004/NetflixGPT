import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    Trailer: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailer: (state, action) => {
      state.Trailer = action.payload;
    },
  },
});
export const { addNowPlaying, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
