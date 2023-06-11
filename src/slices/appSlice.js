import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    readOnly: true,
  },
  reducers: {
    setReadOnly: (state, action) => {
      state.readOnly = action.payload;
    },
  },
});

export const { setReadOnly } = appSlice.actions;

export default appSlice.reducer;
