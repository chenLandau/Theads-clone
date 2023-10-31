import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Wrapper from "../assets/wrappers/UserFollowers";
import { getPostLikes } from "../services/postService";
const PostLikes = ({ postId, setShowUserFollowers, showUserFollowers }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostLikes(postId);
        setUsers(data.users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user connections:", error);
      }
    };
    fetchData();
  }, []);
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
          <div className="header-container">
            <h3 className="title">Likes</h3>
          </div>
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <div className="followers-body">
              {users.length === 0 ? (
                <h5 className="text">No users to display...</h5>
              ) : (
                users.map((user) => {
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

export default PostLikes;
