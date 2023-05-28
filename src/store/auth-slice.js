import { createSlice } from "@reduxjs/toolkit";
import postsSlice from "./posts-slice";

const initialState = {
  isLoggedIn: false,
  user: null,
  posts: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { id, firstName, lastName } = action.payload;
      if ((id, firstName, lastName))
        return {
          ...state,
          isLoggedIn: true,
          user: {
            id,
            firstName,
            lastName,
          },
        };
      else return initialState;
    },
    logout() {
      return initialState;
    },
  },
  // extraReducers: {
  //   ["posts/addPost"]: (state, action) => {
  //     state.posts.push(action.payload.post);
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(postsSlice.actions.addPost, (state, action) => {
      state.posts.push(action.payload.post);
    });
  },
});

export default authSlice;
