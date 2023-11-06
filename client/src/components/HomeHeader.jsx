import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Header";
import { useDispatch } from "react-redux";
import { setPosts } from "../features/post/postSlice";
const HomeHeader = ({ followingPosts, forYouPosts }) => {
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPosts({ posts: forYouPosts, displayMode: "home" }));
  }, []);
  const setForYouPosts = () => {
    setIsActive(true);
    dispatch(setPosts({ posts: forYouPosts, displayMode: "home" }));
  };
  const setFollowingPosts = () => {
    setIsActive(false);
    dispatch(setPosts({ posts: followingPosts, displayMode: "home" }));
  };
  return (
    <Wrapper>
      <header className="header">
        <div className="header-btn-container">
          <button
            className={isActive ? "header-btn active" : "header-btn"}
            onClick={setForYouPosts}
          >
            For You
          </button>
          <button
            className={!isActive ? "header-btn active" : "header-btn"}
            onClick={setFollowingPosts}
          >
            Following
          </button>
        </div>
      </header>
    </Wrapper>
  );
};

export default HomeHeader;
