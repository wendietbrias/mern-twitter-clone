const PostsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "GET_ALL_POSTS":
      state = payload;
      return state;
      break;

    case "CREATE_POST":
      return [...state, payload];
      break;

    case "DELETE_POST":
      const filteredState = state.filter((post) =>
        post?._id !== payload ? post : ""
      );
      state = filteredState;
      return state;
      break;

    case "LIKE_POST":
      const modifiedPost = state.map((post) =>
        post?._id === payload._id ? payload : post
      );
      state = modifiedPost;
      return state;
      break;

    default:
      return state;
  }
};

export default PostsReducer;
