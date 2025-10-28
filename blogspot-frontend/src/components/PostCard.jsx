
import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ articleId, image, title, date, author_name, body }) => {
  return (
    <div className="post-card">
      <p className="article-num">{articleId}</p>
      <img src={image} alt={title} className="post-image" />
      <div className="post-content">
        <h3 className="post-title">{title}</h3>
        <p className="post-date">
           {date} | {author_name}
        </p>
        <p className="post-text">{body}</p>
        <div className="card-actions">
          <Link to= '/blogpost/${article_id}' className="read-more"> Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
