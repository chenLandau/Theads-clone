import customFetch from "../utils/customFetch";

export const login = async (userData) => {
  await customFetch.post("/auth/login", userData);
};
export const register = async (userData) => {
  await customFetch.post("/auth/register", userData);
};
