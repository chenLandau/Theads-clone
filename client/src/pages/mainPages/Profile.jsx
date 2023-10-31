import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/Page";
import {
  ProfileHeader,
  InteractivePostCard,
  Loading,
} from "../../components/index";
import { useOutletContext, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../thunks/usersThunk";
import { fetchUserPosts } from "../../thunks/postsThunks";
const Profile = () => {
  const { username } = useParams();
  const { user } = useOutletContext();
  const [showUserFollowers, setShowUserFollowers] = useState(false);
  const { selectedUser } = useSelector((state) => state.user);
  const { profilePosts } = useSelector((state) => state.post);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchUserProfile(username));
      await dispatch(fetchUserPosts(username));
      setLoading(false);
    };
    fetchData();
  }, [username]);
  if (loading || !selectedUser) return <Loading />;
  console.log({ user });

  const isAuthorizedUser = user._id === selectedUser._id;
  return (
    <Wrapper>
      <section className="container">
        <ProfileHeader
          selectedUser={selectedUser}
          isAuthorizedUser={isAuthorizedUser}
          showUserFollowers={showUserFollowers}
          setShowUserFollowers={setShowUserFollowers}
        />
        <div className="home-body">
          {profilePosts.map((post) => {
            return (
              <InteractivePostCard
                key={post._id}
                {...post}
                isAuthorizedUser={isAuthorizedUser}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Profile;
