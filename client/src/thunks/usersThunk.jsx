import customFetch from "../utils/customFetch";
import { actions } from "../features/user/userSlice";

export const fetchUserProfile = (username) => async (dispatch) => {
  const userDataResponse = await customFetch.get(
    `/users/target-user-profile?username=${username}`
  );
  dispatch(
    actions.fetchProfile({
      user: userDataResponse.data.user,
    })
  );
};

export const followUser = (userId) => async (dispatch) => {
  const { data } = await customFetch.patch(
    `/connections/follow-user?targetUserId=${userId}`
  );
  dispatch(actions.followUser(data));
};

export const unFollowUser = (userId) => async (dispatch) => {
  const { data } = await customFetch.patch(
    `/connections/unfollow-user?targetUserId=${userId}`
  );
  dispatch(actions.followUser(data));
};
