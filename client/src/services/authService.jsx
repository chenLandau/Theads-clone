import customFetch from "../utils/customFetch";

export const register = async (formData) => {
  await customFetch.post("/auth/register", formData);
};
export const login = async (formData) => {
  await customFetch.post("/auth/login", formData);
};
export const logout = async () => {
  await customFetch.get("/auth/logout");
};
