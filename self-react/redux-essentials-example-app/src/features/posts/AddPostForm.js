import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  console.log("render");

  const onSubmitPostForm = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a new post</h2>
      <form onSubmit={(e) => onSubmitPostForm(e)}>
        <label htmlFor="title">Post Title:</label>
        <input
          placeholder="What's on your mind ?"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="title"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};
