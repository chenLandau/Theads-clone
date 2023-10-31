import React from "react";
import { useDispatch } from "react-redux";
import { followUser } from "../thunks/usersThunk";
const FollowBtn = ({ targetUserId }) => {
  const dispatch = useDispatch();
  return (
    <button className="btn" onClick={() => dispatch(followUser(targetUserId))}>
      Follow
    </button>
  );
};

export default FollowBtn;
