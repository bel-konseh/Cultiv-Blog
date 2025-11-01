// src/pages/CreatePost.jsx
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    
    const API_URL = "https://cultiv-blog-backend.onrender.com/api";
    e.preventDefault();
    // console.log({ title, body, imageUrl });
    // alert("Post created successfully! (simulate API call)");

    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ title: title,body: body, articleImgUrl:imageUrl }),
      });
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image link"
        />

        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />

        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your blog content here..."
          required
        ></textarea>

        <button type="submit" className="btn-create">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
