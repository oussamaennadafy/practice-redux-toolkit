import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

function Posts() {
  const postsStore = useSelector((store) => store.posts);
  return (
    <section className="w-full my-5">
      <h2 className="w-full sm:w-1/2 mx-auto text-center mb-4 text-2xl">
        Posts
      </h2>
      <div className="flex items-center justify-center flex-col gap-2 w-full px-5 mx-auto pb-10">
        {postsStore.length ? (
          postsStore.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>no post found</p>
        )}
      </div>
    </section>
  );
}

export default Posts;
