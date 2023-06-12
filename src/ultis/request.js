import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:1337",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      window.location.replace("../admin/login");
      localStorage.clear();
    }
  }
);

export const get = async (pathApi, options = {}) => {
  const res = await request.get(pathApi, options);
  return res?.data;
};

export const post = async (pathApi, payload, options) => {
  const res = await request.post(pathApi, payload, options);
  return res.data;
};

export const put = async (pathApi, options) => {
  const res = await request.put(pathApi, options);
  return res.data;
};



export default request;
