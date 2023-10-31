import React from "react";
import { Link } from "react-router-dom";

const UserProfileLink = ({ username, userId }) => {
  return (
    <Link to={`/threads/${username}`} className="profile-link">
      <h5 className="profile-link">{username}</h5>
    </Link>
  );
};

export default UserProfileLink;
