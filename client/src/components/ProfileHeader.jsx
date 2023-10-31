import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Header";
import profileImg from "../assets/images/default-profile-pic.jpg";
import UserFollowers from "./UserFollowers";
import { useSelector } from "react-redux";
import FollowBtn from "./FollowBtn";
import FollowingBtn from "./FollowingBtn";
const ProfileHeader = ({
  selectedUser,
  isAuthorizedUser,
  showUserFollowers,
  setShowUserFollowers,
}) => {
  const { FollowedByAuth } = useSelector((state) => state.user);
  const { _id, name, user_name, avatar, followersAmount, followingAmount } =
    selectedUser;
  console.log(_id);
  const [isActive, setIsActive] = useState(true);

  const toggleFollowersCard = () => {
    setShowUserFollowers(true);
    // console.log(showFollowers);
  };

  return (
    <Wrapper>
      <header className="header">
        <div className="user-container">
          <div className="details">
            <h3>{name}</h3>
            <h4>{user_name}</h4>
            <button className="card-btn" onClick={toggleFollowersCard}>
              {followersAmount} followers · {followingAmount} following
            </button>
            {showUserFollowers && (
              <UserFollowers
                userId={_id}
                showUserFollowers={showUserFollowers}
                setShowUserFollowers={setShowUserFollowers}
              />
            )}
          </div>
          <img src={avatar || profileImg} alt="pro" className="profile-pic" />
        </div>
        <div className="btn-container-1">
          {isAuthorizedUser ? (
            <button className="btn">edit Profile</button>
          ) : FollowedByAuth.includes(_id) ? (
            <FollowingBtn targetUserId={_id} />
          ) : (
            <FollowBtn targetUserId={_id} />
          )}
          <button className="btn">share profile</button>
        </div>
        <div className="header-btn-container">
          <button className={isActive ? "header-btn active" : "header-btn"}>
            Threads
          </button>
          <button className={!isActive ? "header-btn active" : "header-btn"}>
            Replies
          </button>
        </div>
        {/* <div className="user-details-container">ProfileHeader</div> */}
      </header>
    </Wrapper>
  );
};

export default ProfileHeader;
