import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/Page";
import {
  InteractivePostCard,
  HomeHeader,
  Loading,
} from "../../components/index";
import { getHomeFeedPosts } from "../../features/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
const HomeFeed = () => {
  const { homePosts, isLoadingPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getHomeFeedPosts());
    setLoading(false);
  }, []);
  // if (isLoadingPosts) return <Loading />;
  return (
    <Wrapper>
      <section className="container page">
        <HomeHeader />
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <div className="home-body">
            {homePosts.map((post) => {
              return <InteractivePostCard key={post._id} {...post} />;
            })}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default HomeFeed;
