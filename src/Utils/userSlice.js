import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: 0,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return 0;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
