import React from "react";
import REACTIONS from "../../../data/reactions";

function Post({ post }) {
  const { title, content, author, createdAt, reactions } = post;
  const date = new Date(createdAt).toDateString();
  return (
    <article className="border border-gray-100 rounded-md w-full p-3 flex flex-col gap-2 text-white">
      <strong>{title}</strong>
      <p>{content}</p>
      <p>
        by {author} , <span className="text-sm">{date}</span>
      </p>
      <div className="flex gap-2">
        {REACTIONS.map((reaction) => (
          <button key={reaction.label}>
            {reaction.icon} {reaction.count}
          </button>
        ))}
      </div>
    </article>
  );
}

export default Post;
