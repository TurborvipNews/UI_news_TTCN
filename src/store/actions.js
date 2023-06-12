import {
  SET_SLIDE_IMAGE,
  SET_USERNAME_LOGIN,
  SET_PASSWORD_LOGIN,
  SET_OTP_STATUS,
  SET_ID_USER,
  SET_AUTH_USER,
  DELETE_ACCOUNT,
  EDIT_ACCOUNT,
  ADD_ACCOUNT,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  ADD_NEWS,
  EDIT_NEWS,
  DELETE_NEWS,
} from "./constants";

export const setSlideImage = (payload) => ({
  type: SET_SLIDE_IMAGE,
  payload,
});
export const setUsernameLogin = (payload) => ({
  type: SET_USERNAME_LOGIN,
  payload,
});

export const setPasswordLogin = (payload) => ({
  type: SET_PASSWORD_LOGIN,
  payload,
});

export const setOTPStatus = (payload) => ({
  type: SET_OTP_STATUS,
  payload,
});

export const setIdUser = (payload) => ({
  type: SET_ID_USER,
  payload,
});
export const setAuthUser = (payload) => ({
  type: SET_AUTH_USER,
  payload,
});

export const addAccount = (payload) => ({
  type: ADD_ACCOUNT,
  payload,
});
export const editAccount = (payload) => ({
  type: EDIT_ACCOUNT,
  payload,
});
export const deleteAccount = (payload) => ({
  type: DELETE_ACCOUNT,
  payload,
});
export const addCategory = (payload) => ({
  type: ADD_CATEGORY,
  payload,
});
export const editCategory = (payload) => ({
  type: EDIT_CATEGORY,
  payload,
});
export const deleteCategory = (payload) => ({
  type: DELETE_CATEGORY,
  payload,
});
export const addNews = (payload) => ({
  type: ADD_NEWS,
  payload,
});
export const editNews = (payload) => ({
  type: EDIT_NEWS,
  payload,
});
export const deleteNews = (payload) => ({
  type: DELETE_NEWS,
  payload,
});
