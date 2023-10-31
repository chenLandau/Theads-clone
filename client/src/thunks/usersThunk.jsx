import customFetch from "../utils/customFetch";
import { actions } from "../features/user/userSlice";

export const fetchUserProfile = (username) => async (dispatch) => {
  try {
    const userDataResponse = await customFetch.get(
      `/users/target-user-profile?username=${username}`
    );
    dispatch(
      actions.fetchProfileSuccess({
        user: userDataResponse.data.user,
      })
    );
  } catch (error) {
    dispatch(actions.updateProfileFailure(error));
  }
};

export const followUser = (userId) => async (dispatch) => {
  try {
    const { data } = await customFetch.patch(
      `/connections/follow-user?targetUserId=${userId}`
    );
    dispatch(actions.followUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export const unFollowUser = (userId) => async (dispatch) => {
  try {
    console.log(userId);
    const { data } = await customFetch.patch(
      `/connections/unfollow-user?targetUserId=${userId}`
    );
    console.log(data);
    dispatch(actions.followUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
};
