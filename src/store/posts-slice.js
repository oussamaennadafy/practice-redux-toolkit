import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.unshift(action.payload.post);
      // state.push(action.payload.post);
    },
    reactToPost(state, action) {
      const post = state.find((post) => post.id === action.id);
      post.reactions[action.payload.reaction]++;
    },
  },
});

export default postsSlice;
