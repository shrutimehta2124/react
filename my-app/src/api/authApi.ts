import apiClient from "./apiClient";

export const loginUser = async (username: string, email: string) => {
  const response = await apiClient.get(`/users?username=${username}&email=${email}`);
  return response.data.length > 0 ? response.data[0] : null;
};

export const registerUser = async (user: { username: string; email: string }) => {
  const response = await apiClient.post("/users", user);
  return response.data;
};
