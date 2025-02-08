import axios from "@/utils/axios";

export const login = async ({ email, password }) => {
  const response = await axios.post("/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const getMe = async () => {
  const response = await axios.get("/auth/me");
  return response.data;
};

export const register = async ({ email, password, fullName }) => {
  console.log(fullName, email, password);

  const response = await axios.post("/auth/register", {
    email,
    password,
    fullName,
  });
  return response.data;
};
