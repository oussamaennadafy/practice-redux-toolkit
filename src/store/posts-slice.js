import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.unshift(action.payload.post);
    },
    reactToPost(state, action) {
      const { postId, reactionType } = action.payload;
      // console.log(postId, reactionType);
      const newState = JSON.parse(JSON.stringify(state));
      const post = newState.find((post) => post.id === postId);

      post.reactions.find((reaction) => reaction.label === reactionType)
        .count++;
      return newState;
    },
  },
});

export default postsSlice;
