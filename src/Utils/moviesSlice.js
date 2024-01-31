import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    Trailer: null,
    Popular: null,
    TopRated: null,
    Upcoming: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.Popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.Upcoming = action.payload;
    },

    addTrailer: (state, action) => {
      state.Trailer = action.payload;
    },
  },
});
export const {
  addNowPlaying,
  addTrailer,
  addPopular,
  addTopRated,
  addUpcoming,
} = moviesSlice.actions;
export default moviesSlice.reducer;
