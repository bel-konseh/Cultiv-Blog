
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import PostCard from "../components/PostCard";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://cultiv-blog-backend.onrender.com/api/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setPosts(data.blogPosts || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="loading">Loading posts...</p>;
  }

  return (
    <div className="homepage">
  
      <HeroSection />

      <section className="posts-section">
        <h2 className="section-title">Latest Posts</h2>
        <h5 className="sub-title">Browse and read the latest articles</h5>
        <div className="posts-grid">
          {posts.map((article) => (
            <PostCard
              key={article.article_id}
              articleId={article.article_id}
              image={article.image_url}
              title={article.title}
              date={new Date(article.created_at).toLocaleDateString()}
              author_name={article.author_id}
              body={article.body.slice(0, 150) + "..."}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
