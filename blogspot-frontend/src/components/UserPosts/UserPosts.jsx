import React from "react";
import "./UserPosts.css";

const UserPosts = ({ posts }) => {
  return (
    <div className="user-posts">
      <h3>Your Posts</h3>
      <div className="posts-grid">
        {posts && posts.length > 0 ? (
          posts
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // newest first
            .map((post) => (
              <div key={post.id} className="post-card">
                <img src={post.imageUrl} alt={post.title} />
                <div className="post-info">
                  <h4>{post.title}</h4>
                  <p>{post.body.slice(0, 100)}...</p>
                </div>
              </div>
            ))
        ) : (
          <p className="no-posts">You haven't posted anything yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserPosts;
