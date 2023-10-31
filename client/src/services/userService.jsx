import customFetch from "../utils/customFetch";

export const getCurrentUser = async () => {
  const { data } = await customFetch.get("./users/current-user");
  return data;
};
