import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    Trailer: null,
    Popular: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.Popular = action.payload;
    },

    addTrailer: (state, action) => {
      state.Trailer = action.payload;
    },
  },
});
export const { addNowPlaying, addTrailer, addPopular } = moviesSlice.actions;
export default moviesSlice.reducer;
