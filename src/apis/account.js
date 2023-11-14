import instance from "./api";

export const login = async (data) => {
  const { memberId, password } = data;
  return instance
    .post("/login", {
      memberId,
      password,
    })
    .then((response) => {
      localStorage.setItem("token", response.headers.authorization);
      return response.data.response;
    })
    .catch((error) => {
      return Promise.reject(error.error);
    });
};

export const register = async (data) => {
  return await instance.post("/register", data);
};
