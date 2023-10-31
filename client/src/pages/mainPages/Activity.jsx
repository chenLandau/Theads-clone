import React from "react";
import Wrapper from "../../assets/wrappers/Page";
import { ActivityCard } from "../../components";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/user-activities");
    return { data };
  } catch (error) {
    return error;
  }
};
const Activity = () => {
  const { data } = useLoaderData();
  const { activities } = data;
  return (
    <Wrapper>
      <section className="container">
        <h1 className="activity-title">Activity</h1>
        {/* <header className="btn-container">
          <button className="activity-btn">All</button>
          <button className="activity-btn">Request</button>
          <button className="activity-btn">Replies</button>
          <button className="activity-btn">Mentions</button>
        </div> */}
        <div className="home-body">
          {activities.map((activity) => {
            return <ActivityCard key={nanoid()} activity={activity} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Activity;
