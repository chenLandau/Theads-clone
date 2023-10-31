import React from "react";

const FollowersBtn = ({ followers }) => {
  const getFollowers = async () => {};

  return (
    <button className="card-btn" onClick={getFollowers}>
      {followers.length} followers
    </button>
  );
};

export default FollowersBtn;
