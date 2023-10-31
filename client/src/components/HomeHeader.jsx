import React, { useState } from "react";
import { FaThreads } from "react-icons/fa6";
import Wrapper from "../assets/wrappers/Header";
import { useDispatch } from "react-redux";
import { setFollowingPosts, setForYouPosts } from "../features/post/postSlice";
const HomeHeader = () => {
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();
  const getForYouPosts = () => {
    setIsActive(true);
    dispatch(setForYouPosts());
  };
  const getFollowingPosts = () => {
    setIsActive(false);
    dispatch(setFollowingPosts());

    // try {
    //   const { data } = await customFetch.get("./posts/following");
    //   setPosts(data.posts);
    // } catch (error) {
    //   toast.error(error);
    // }
  };
  return (
    <Wrapper>
      <header className="header">
        <div className="header-btn-container">
          <button
            className={isActive ? "header-btn active" : "header-btn"}
            onClick={getForYouPosts}
          >
            For You
          </button>
          <button
            className={!isActive ? "header-btn active" : "header-btn"}
            onClick={getFollowingPosts}
          >
            Following
          </button>
        </div>
      </header>
    </Wrapper>
  );
};

export default HomeHeader;
