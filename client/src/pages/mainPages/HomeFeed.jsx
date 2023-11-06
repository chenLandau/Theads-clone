import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Page";
import { InteractivePostCard, HomeHeader } from "../../components/index";
import { getHomeFeedPosts } from "../../services/postService";
import { useSelector } from "react-redux";
export const loader = async () => {
  try {
    const data = await getHomeFeedPosts();
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const HomeFeed = () => {
  const { homePosts } = useSelector((state) => state.post);
  const { followingPosts, forYouPosts } = useLoaderData();
  return (
    <Wrapper>
      <section className="container page">
        <HomeHeader followingPosts={followingPosts} forYouPosts={forYouPosts} />
        <div className="home-body">
          {homePosts.map((post) => {
            return <InteractivePostCard key={post._id} {...post} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeFeed;
