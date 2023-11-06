import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Header";
import profileImg from "../assets/images/default-profile-pic.jpg";
import UserFollowers from "./UserFollowers";
import { useSelector, useDispatch } from "react-redux";
import FollowBtn from "./FollowBtn";
import FollowingBtn from "./FollowingBtn";
import { Link } from "react-router-dom";
import { setPosts } from "../features/post/postSlice";

const ProfileHeader = ({
  threads,
  replies,
  selectedUser,
  isAuthorizedUser,
  showUserFollowers,
  setShowUserFollowers,
  isActive,
  setIsActive,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPosts({ posts: threads, displayMode: "profile" }));
  }, []);
  const setThreadsPosts = () => {
    setIsActive(true);
    dispatch(setPosts({ posts: threads, displayMode: "profile" }));
  };
  const setRepliesPosts = () => {
    setIsActive(false);
    dispatch(setPosts({ posts: replies, displayMode: "profile" }));
  };
  const { FollowedByAuth } = useSelector((state) => state.user);
  const {
    _id,
    name,
    user_name,
    avatar,
    followersAmount,
    followingAmount,
    bio,
  } = selectedUser;

  const toggleFollowersCard = () => {
    setShowUserFollowers(true);
  };

  return (
    <Wrapper>
      <header className="header">
        <div className="user-container">
          <div className="details">
            <h3>{name}</h3>
            <h4>{user_name}</h4>
            <h4>{bio}</h4>
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
            <Link to="EditProfile">
              <button className="white-btn">edit Profile</button>
            </Link>
          ) : FollowedByAuth.includes(_id) ? (
            <FollowingBtn targetUserId={_id} />
          ) : (
            <FollowBtn targetUserId={_id} />
          )}
        </div>
        <div className="header-btn-container">
          <button
            className={isActive ? "header-btn active" : "header-btn"}
            onClick={setThreadsPosts}
          >
            Threads
          </button>
          <button
            className={!isActive ? "header-btn active" : "header-btn"}
            onClick={setRepliesPosts}
          >
            Replies
          </button>
        </div>
        {/* <div className="user-details-container">ProfileHeader</div> */}
      </header>
    </Wrapper>
  );
};

export default ProfileHeader;
