import { createSlice } from "@reduxjs/toolkit";
const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    ChangeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
export const { ChangeLanguage } = configSlice.actions;
export default configSlice.reducer;
