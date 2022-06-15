import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./posts/slice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
