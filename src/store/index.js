import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
