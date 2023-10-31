import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Wrapper from "../assets/wrappers/UserFollowers";
import { getUserConnections } from "../services/postService";
const UserFollowers = ({ userId, showUserFollowers, setShowUserFollowers }) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserConnections(userId);
        setFollowers(data.followers);
        setFollowing(data.following);
        setDisplayedUsers(data.followers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user connections:", error);
      }
    };
    fetchData();
  }, []);
  const setDisplayedFollowers = () => {
    setIsActive(true);
    setDisplayedUsers(followers);
  };
  const setDisplayedFollowing = () => {
    setIsActive(false);
    setDisplayedUsers(following);
  };
  return (
    <Wrapper>
      <div
        className={
          showUserFollowers
            ? "followers-container show-container"
            : "followers-container hide-container"
        }
      >
        <div
          className="card-layout"
          onClick={() => setShowUserFollowers(false)}
        />

        <div className="container">
          <div className="header-btn-container">
            <button
              className={isActive ? "header-btn active" : "header-btn"}
              onClick={setDisplayedFollowers}
            >
              Followers
            </button>
            <button
              className={!isActive ? "header-btn active" : "header-btn"}
              onClick={setDisplayedFollowing}
            >
              Following
            </button>
          </div>
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <div className="followers-body">
              {displayedUsers.length === 0 ? (
                <h5 className="text">No users to display...</h5>
              ) : (
                displayedUsers.map((user) => {
                  return <UserCard key={user._id} {...user} />;
                })
              )}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default UserFollowers;
