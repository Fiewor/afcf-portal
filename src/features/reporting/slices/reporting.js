import { createSlice } from "@reduxjs/toolkit";

export const reportingSlice = createSlice({
  name: "reporting",
  initialState: {
    reportingScreen: "reporting",
  },
  reducers: {
    setReportingScreen: (state, action) => {
      state.reportingScreen = action.payload;
    },
  },
});

export const { setReportingScreen } = reportingSlice.actions;
export default reportingSlice.reducer;
