import React, { useState } from "react";
import { useDispatch } from "react-redux";
import postsSlice from "../../store/posts-slice";

function AddPost() {
  const dispatch = useDispatch();

  const initialFormState = {
    title: "",
    author: "",
    content: "",
  };

  const [form, setForm] = useState(initialFormState);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, author } = form;
    if (!title || !content || !author)
      return setError("please fill all inputs");
    dispatch(postsSlice.actions.addPost({ title, content, author }));
    setForm(initialFormState);
    setError(null);
  };
  return (
    <>
      <h1 className="text-2xl text-center">Add new Post</h1>
      <form
        className="flex flex-col w-full px-5 sm:w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="title">title</label>
          <input
            onChange={handleChange}
            value={form.title}
            name="title"
            placeholder="title"
            type="text"
            id="title"
            className="text-black px-2 py-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="author">author</label>
          <select
            onChange={handleChange}
            value={form.author}
            name="author"
            id="author"
            className="text-black"
          >
            {form.author || <option value="">Select an option</option>}
            <option value="oussama">oussama</option>
            <option value="taha">taha</option>
            <option value="jonas">jonas</option>
            <option value="ayoub">ayoub</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="content">content</label>
          <textarea
            onChange={handleChange}
            value={form.content}
            name="content"
            id="content"
            placeholder="content"
            className="text-black px-2 py-1"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        {error ? (
          <p className="mt-2 text-red-700 font-medium text-center">{error}</p>
        ) : null}
        <button
          className="w-full bg-white text-black mt-5 py-2 rounded"
          type="submit"
        >
          Save post
        </button>
      </form>
    </>
  );
}

export default AddPost;
