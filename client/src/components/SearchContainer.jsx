import React from "react";
import UserCard from "./UserCard";
import { useSearchUsersContext } from "../pages/mainPages/Search";
const SearchContainer = () => {
  const { data } = useSearchUsersContext();
  const { users } = data;
  if (users.length === 0) {
    return <h2>No users to display...</h2>;
  }
  return (
    <div className="home-body">
      {users.map((user) => {
        return <UserCard key={user._id} {...user} />;
      })}
    </div>
  );
};

export default SearchContainer;
