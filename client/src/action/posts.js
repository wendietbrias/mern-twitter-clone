import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/api" });

export const getAllPosts = () => async (dispatch) => {
  const { data } = await API.get(`/posts`);
  if (!data) {
    return dispatch({ type: "GET_ALL_POSTS", payload: [] });
  }

  return dispatch({ type: "GET_ALL_POSTS", payload: data });
};

export const createPost = (formData, token) => async (dispatch) => {
  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  });

  try {
    const { data } = await API.post(`/posts/create`, formData);
    if (data) {
      dispatch({ type: "CREATE_POST", payload: data });
    }
  } catch (err) {
    return err;
  }
};

export const deletePost = (id, token) => async (dispatch) => {
  API.interceptors.request.use((request) => {
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  });

  try {
    await API.delete(`/posts/delete/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (err) {
    return err;
  }
};

export const handleLike = (user, id) => async (dispatch) => {
  API.interceptors.request.use((request) => {
    if (user) {
      request.headers.Authorization = `Bearer ${user?.token}`;
    }

    return request;
  });
  try {
    const { data } = await API.patch(`/posts/like/${id}`, user?.result);
    dispatch({ type: "LIKE_POST", payload: data });
  } catch (err) {
    return err;
  }
};
