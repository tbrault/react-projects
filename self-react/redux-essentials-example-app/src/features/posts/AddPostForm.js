import { useState } from "react";

export const AddPostForm = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const onSubmitPostForm = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <section>
      <h2>Add a new post</h2>
      <form onSubmit={(e) => onSubmitPostForm(e)}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          placeholder="What's on your mind ?"
          id="postTitle"
          name="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postTitle"
          name="postContent"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};
