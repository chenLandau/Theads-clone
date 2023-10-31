import React from "react";
import { useDispatch } from "react-redux";
import { unFollowUser } from "../thunks/usersThunk";
const FollowingBtn = ({ targetUserId }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn"
      onClick={() => dispatch(unFollowUser(targetUserId))}
    >
      Following
    </button>
  );
};

export default FollowingBtn;
