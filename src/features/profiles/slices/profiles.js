import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    membersScreen: "list",
    profilesScreen: "coordinator",
  },
  reducers: {
    setMembersScreen: (state, action) => {
      state.membersScreen = action.payload;
    },
    setProfilesScreen: (state, action) => {
      state.profilesScreen = action.payload;
    },
  },
});

export const { setMembersScreen, setProfilesScreen } = profileSlice.actions;
export default profileSlice.reducer;
