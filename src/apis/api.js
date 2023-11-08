import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// multi-part/formdata 형식으로 데이터를 전송하기 위한 instance

const organizeError = (error) => {
  return {
    success: false,
    error: error.response.data.error,
    code: error.response.status,
  };
};

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("Refresh-Token");
  if (token) {
    config.headers.Authorization = token;
    config.headers["Refresh-Token"] = refreshToken;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    // refresh token이 발급되었을 때
    if (response.headers["Refresh-Token"]) {
      localStorage.setItem("Refresh-Token", response.headers["Refresh-Token"]);
    }
    return response;
  },
  (error) => {
    // 특정 HTTP 상태 코드에 대한 전역 처리
    switch (error.response.status) {
      case 401:
      case 402:
        // 인증 에러 처리
        localStorage.removeItem("token");
        alert("Login is required.");
        window.location.href = "/login";
        break;
      case 404:
        // 404 Not Found 에러 처리
        // alert("The requested resource was not found.");
        break;
      default:
        // 기타 에러 처리
        alert("An error occurred.");
        break;
    }
    return Promise.reject(organizeError(error));
  },
);

export const instanceFormData = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

instanceFormData.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("Refresh-Token");
  if (token) {
    config.headers.Authorization = token;
    config.headers["Refresh-Token"] = refreshToken;
  }
  return config;
});

instanceFormData.interceptors.response.use((response) => {
  // refresh token이 발급되었을 때
  if (response.headers["Refresh-Token"]) {
    localStorage.setItem("Refresh-Token", response.headers["Refresh-Token"]);
  }
  return response;
});

export default instance;
