import { combineReducers } from "redux";
import AuthReducer from "./auth";
import PostsReducer from "./posts";
import AlertReducer from "./alert";

export default combineReducers({
  auth: AuthReducer,
  post: PostsReducer,
  alert: AlertReducer,
});
