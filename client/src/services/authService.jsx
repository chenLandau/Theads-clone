import customFetch from "../utils/customFetch";

export const register = async (userData) => {
  await customFetch.post("/auth/register", userData);
};
export const login = async (userData) => {
  await customFetch.post("/auth/login", userData);
};
export const logout = async () => {
  await customFetch.get("/auth/logout");
};
