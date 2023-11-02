import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorizedUserId: "",
  FollowedByAuth: [],
  selectedUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    followUser: (state, action) => {
      const { following, targetUserId, targetUserFollowersAmount } =
        action.payload;
      state.FollowedByAuth = following;
      if (targetUserId === state.selectedUser._id) {
        state.selectedUser.followersAmount = targetUserFollowersAmount;
      }
    },
    updateAuthUser: (state, action) => {
      const { _id, following } = action.payload;
      state.authorizedUserId = _id;
      state.FollowedByAuth = following;
    },
    fetchProfile: (state, action) => {
      const { user } = action.payload;
      state.selectedUser = user;
    },
  },
});
export const { setUsers, updateAuthUser } = userSlice.actions;
export const { actions } = userSlice;
export default userSlice.reducer;
