import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

export const AddPostForm = () => {
  const titleRef = useRef();
  const contentRef = useRef();

  const dispatch = useDispatch();

  const onSubmitPostForm = (e) => {
    e.preventDefault();
    if (titleRef.current && contentRef.current) {
      dispatch(
        postAdded({
          id: nanoid(),
          title: titleRef.current.value,
          content: contentRef.current.value,
        })
      );
      titleRef.current.value = "";
      contentRef.current.value = "";
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
          ref={titleRef}
        />
        <label htmlFor="content">Content:</label>
        <textarea id="title" name="content" ref={contentRef}></textarea>
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};
