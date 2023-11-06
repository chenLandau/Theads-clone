import customFetch from "../utils/customFetch";

export const getCurrentUser = async () => {
  const { data } = await customFetch.get("./users/current-user");
  return data;
};

export const editUserProfile = async (userData) => {
  await customFetch.patch("/users/edit-user-profile", userData);
};

export const fetchUserProfile = async (username) => {
  const { data } = await customFetch.get(
    `/users/target-user-profile?username=${username}`
  );
  return data;
};
