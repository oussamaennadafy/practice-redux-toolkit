import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

function Posts() {
  const postsStore = useSelector((posts) => posts);
  return (
    <section className="w-full">
      <h2 className="w-1/2 mx-auto text-center mb-4 text-2xl">Posts</h2>
      <div className="flex items-center justify-center flex-col gap-2 w-1/2 mx-auto pb-10">
        {postsStore.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default Posts;
