let token = localStorage.getItem("token");

export const setToken = (newToken) => {
  token = newToken;
  console.log("TOKEN SET:", token);
};

export const getToken = () => token;
