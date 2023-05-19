import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      const newState = structuredClone(state);
      newState.push(action.payload.post);
      return newState;
    },
    reactToPost(state, action) {
      const newState = structuredClone(state);
      const post = newState.find((post) => post.id === action.id);
      post.reactions[action.payload.reaction]++;
      return newState;
    },
  },
});

export default postsSlice;
