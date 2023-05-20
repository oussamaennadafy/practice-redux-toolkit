import React from "react";
import postsSlice from "../../../store/posts-slice";
import { useDispatch } from "react-redux";
import { reactionsIcons } from "./../../../data/reactions";

function Post({ post }) {
  const dispatch = useDispatch();

  const { title, content, author, createdAt, reactions } = post;
  const date = new Date(createdAt).toDateString();

  const addReaction = (postId, reactionType) => {
    dispatch(postsSlice.actions.reactToPost({ postId, reactionType }));
  };

  const reactionsButtons = Object.entries(reactionsIcons).map((reaction) => (
    <button onClick={() => addReaction(post.id, reaction[0])} key={reaction[0]}>
      {reaction[1]} {reactions[reaction[0]]}
    </button>
  ));

  return (
    <article className="border border-gray-100 rounded-md w-full p-3 flex flex-col gap-2 text-white">
      <strong>{title}</strong>
      <p>{content}</p>
      <p>
        by {author} , <span className="text-sm">{date}</span>
      </p>
      <div className="flex gap-2">{reactionsButtons}</div>
    </article>
  );
}

export default Post;
