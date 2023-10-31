import React from "react";
import Wrapper from "../assets/wrappers/ActivityCard";
import { ACTIVITY_TYPE } from "../../../utils/constants";
import UserProfileLink from "./UserProfileLink";
import { Link } from "react-router-dom";
import { useDashboardContext } from "../pages/mainPages/DashboardLayout";
const ActivityCard = ({ activity }) => {
  const { user } = useDashboardContext();
  const getText = (activityType) => {
    let image, createdBy, text;
    switch (activityType) {
      case ACTIVITY_TYPE.PROFILE_VIEW:
        text = "viewed your profile";
        break;
      case ACTIVITY_TYPE.NEW_FOLLOW:
        text = "started following you";
        break;
      case ACTIVITY_TYPE.NEW_POST:
        text = "recently posted a new thread";
        image = activity.postImage;
        createdBy = activity.username;
        break;
      case ACTIVITY_TYPE.POST_LIKE:
        text = "liked your post";
        image = activity.postImage;
        createdBy = user.user_name;
        break;
      case ACTIVITY_TYPE.POST_REPLY:
        text = "replied your post";
        createdBy = user.user_name;

        break;
      case ACTIVITY_TYPE.REPLY_LIKE:
      default:
        break;
    }
    return { text, image, createdBy };
  };
  const { text, image, createdBy } = getText(activity.activityType);
  console.log(image);
  return (
    <Wrapper>
      <div className="card">
        <div className="img-container">
          <img src={activity.avatar} className="big-img" />
        </div>
        <div className="card-container">
          <UserProfileLink
            username={activity.username}
            userId={activity.userId}
          />
          <h1 className="activity-type">{text}</h1>
        </div>
        <div className="button-container">
          {image && (
            <Link to={`/threads/${createdBy}/post/${activity.postId}`}>
              <img src={image} className="post-avatar" />
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ActivityCard;
