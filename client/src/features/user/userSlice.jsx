import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/customFetch";

const initialState = {
  authorizedUserId: "",
  isAuthorizedUser: null,
  FollowedByAuth: [],
  selectedUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    followUserSuccess: (state, action) => {
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
      state.isAuthorizedUser = true;
      state.FollowedByAuth = following;
    },
    fetchProfileSuccess: (state, action) => {
      const { user } = action.payload;
      state.selectedUser = user;
      console.log(state.selectedUser);
    },
    updateProfileFailure: (state, action) => {},
  },
  extraReducers: {},
});
export const { setUsers, updateAuthUser } = userSlice.actions;
export const { actions } = userSlice;
export default userSlice.reducer;
