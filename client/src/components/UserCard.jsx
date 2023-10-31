import React, { useState } from "react";
import Wrapper from "../assets/wrappers/UserCard";
import profileImg from "../assets/images/default-profile-pic.jpg";
import FollowingBtn from "./FollowingBtn";
import FollowBtn from "./FollowBtn";
import UserProfileLink from "./UserProfileLink";
import { useSelector } from "react-redux";
const UserCard = ({ _id, avatar, name, user_name }) => {
  const { FollowedByAuth, authorizedUserId } = useSelector(
    (state) => state.user
  );
  const isAuthCard = authorizedUserId === _id;
  return (
    <Wrapper>
      <div className="card">
        <div className="img-container">
          <img src={avatar || profileImg} className="big-img" />
        </div>
        <div className="card-container">
          <UserProfileLink username={user_name} userId={_id} />
          <h5 className="user-name">{name}</h5>
        </div>

        {!isAuthCard && (
          <div className="button-container">
            {FollowedByAuth.includes(_id) ? (
              <FollowingBtn targetUserId={_id} />
            ) : (
              <FollowBtn targetUserId={_id} />
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default UserCard;
