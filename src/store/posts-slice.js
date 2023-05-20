import { createSlice, nanoid } from "@reduxjs/toolkit";
import { reactionsInstance } from "./../data/reactions";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.unshift(action.payload.post);
      },
      prepare({ title, content, author }) {
        return {
          payload: {
            post: {
              id: nanoid(),
              createdAt: Date.now(),
              reactions: reactionsInstance,
              title,
              content,
              author,
            },
          },
        };
      },
    },

    reactToPost: (state, action) => {
      const { postId, reactionType } = action.payload;
      const newState = JSON.parse(JSON.stringify(state));
      const post = newState.find((post) => post.id === postId);

      post.reactions[reactionType]++;
      return newState;
    },
  },
});

export default postsSlice;
