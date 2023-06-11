import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    screen: "dashboard",
  },
  reducers: {
    setCurrentScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

export const { setCurrentScreen } = dashboardSlice.actions;
export default dashboardSlice.reducer;
