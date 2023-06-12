import * as request from "../ultis/request";
import axios from "axios";
import notify from "../ultis/notify";

// Common categories
export const getCategories = async () => {
  try {
    const res = await request.get("/api/getAllCategories");
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

// Home page
export const getDataHome = async () => {
  try {
    const newContent = await request.get("/api/news/newest");
    const hotNewsHour = await request.get("/api/news/hot");
    const data = {
      newContent,
      hotNewsHour,
    };
    return {data};
  } catch (error) {
    notify("error", error?.message);
  }
};

export const getNewsInfinitive = async (page) => {
  try {
    const res = await request.get(`/api/news/infinitive?page=${page}`);
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

// News Detail

export const getNewsDetail = async (id) => {
  try {
    const res = await request.post(`/api/news-cus`, { id });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

// List new flow categories
export const getNewsFlowCategoriesId = async ({
  fieldCategory,
  page,
  filter,
  caption,
  author,
  pageSize
}) => {
  try {
    const res = await request.get(
      `/api/category/${fieldCategory}?page=${page || 1}&pageSize=${pageSize || 10}&filter=${
        filter || "desc"
      }&caption=${caption || ""}&author=${author || ""}`
    );
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

//---------------------------------------------------Admin-------------------------------------------------------
//create category

export const login = async (email, password) => {
  try {
    const res = await request.post(`api/login`, { email, password });
    return res;
  } catch (error) {
    // notify("error", error?.message[0]);
  }
};

export const createNewCategory = async (newCategory) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/categories/create`, newCategory, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};
export const deleteCategory = async (id) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/categories/delete`, id, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};

export const updateCategory = async (category) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/categories/update`, category, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};

export const getCategoryInAdmin = async (page, pageSize) => {
  try {
    const res = await request.get(
      `/api/categories?page=${page || ""}&pageSize=${pageSize || ""}`
    );
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

//news
export const createNews = async (news) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/news/create`, news, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};

export const updateNews = async (news) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/news/update`, news, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};
export const deleteNews = async (id) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/news/delete`, { id }, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};
export const getAllNews = async (page, pageSize) => {
  try {
    const res = await request.get(
      `api/news?page=${page || ""}&pageSize=${pageSize || ""}`
    );
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const amount = async () => {
  const token = localStorage.getItem("accessToken");
  const headers = {
    Authorization: "Bearer " + token,
  };
  const res = await request.get("api/news/amount", { headers });
  return res;
};

// user
export const getUser = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.get(`api/user/find`, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const createUser = async (payload) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.post(`api/user/register`, payload, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const deleteUser = async (payload) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.post(`api/user/delete`, payload, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const updateUser = async (payload) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.post(`api/user/update`, payload, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.post(`api/logout`, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};
export const dataAccount = [
  {
    id: "1",
    name: "admin01",
    password: "123456",
    email: "admin@gmail.com",
    role: "superadmin",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    status: true,
  },
];

export const dataCategory = [
  {
    id: "1",
    name: "sport",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: null,
  },
];

export const dataNews = [
  {
    id: 24,
    caption: "ahhsssi",
    image: "a",
    description: null,
    content: "aaa",
    author: null,
    viewHour: 0,
    viewDaily: 0,
    status: 1,
    createBy: null,
    updateBy: null,
    created_at: "2023-02-28T14:22:10.000000Z",
    updated_at: "2023-02-28T14:22:10.000000Z",
  },
];
