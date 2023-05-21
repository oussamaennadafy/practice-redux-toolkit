import React from "react";
import postsSlice from "../../../store/posts-slice";
import { useDispatch, useSelector } from "react-redux";
import { reactionsIcons } from "./../../../data/reactions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Post({ post }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  const { title, content, author, createdAt, reactions } = post;
  const date = new Date(createdAt).toDateString();

  const handleReact = (postId, reactionType) => {
    if (isLoggedIn)
      dispatch(postsSlice.actions.reactToPost({ postId, reactionType }));
    else toast("please login first");
  };

  const reactionsButtons = Object.entries(reactionsIcons).map((reaction) => (
    <button onClick={() => handleReact(post.id, reaction[0])} key={reaction[0]}>
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
      <ToastContainer />
    </article>
  );
}

export default Post;
