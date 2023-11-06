import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/Page";
import {
  ProfileHeader,
  InteractivePostCard,
  Loading,
  ReplyCard,
} from "../../components/index";
import { useOutletContext, redirect, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfilePosts } from "../../services/postService";
import { fetchUserProfile } from "../../services/userService";
import { setSelectedUser } from "../../features/user/userSlice";
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const username = url.pathname.split("/").pop();
  try {
    const data = await getUserProfilePosts(username);
    const { user } = await fetchUserProfile(username);
    const { posts, postsWithReplies } = data;
    return { posts, postsWithReplies, userData: user };
  } catch (error) {
    return redirect("/");
  }
};
const Profile = () => {
  const { user } = useOutletContext();
  const [showUserFollowers, setShowUserFollowers] = useState(false);
  const { profilePosts } = useSelector((state) => state.post);
  const { selectedUser } = useSelector((state) => state.user);
  const { posts, postsWithReplies, userData } = useLoaderData();
  const [isActive, setIsActive] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedUser(userData));
  }, []);
  if (!selectedUser) return <Loading />;

  const isAuthorizedUser = user._id === selectedUser._id;
  return (
    <Wrapper>
      <section className="container">
        <ProfileHeader
          selectedUser={selectedUser}
          isAuthorizedUser={isAuthorizedUser}
          showUserFollowers={showUserFollowers}
          threads={posts}
          replies={postsWithReplies}
          isActive={isActive}
          setIsActive={setIsActive}
          setShowUserFollowers={setShowUserFollowers}
        />
        <div className="home-body">
          {isActive
            ? profilePosts.map((post) => {
                return <InteractivePostCard key={post._id} {...post} />;
              })
            : profilePosts.map((post) => {
                const { reply } = post;
                return (
                  <div key={post._id}>
                    <InteractivePostCard key={post._id} {...post} />
                    <ReplyCard reply={reply} />
                  </div>
                );
              })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Profile;
