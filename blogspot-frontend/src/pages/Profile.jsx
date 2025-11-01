import React from "react";
import { Link } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import UserPosts from "../components/UserPosts/UserPosts";
import "./Profile.css";

const Profile = () => {
  // replace with real user data or API call
  const user = {
    name: "Wendy-Noel",
    email: "wendy@gmail.com",
    bio: "Blogger | Storyteller | Lover of culture and creativity",
    profileImage: "",
  };
  const token = localStorage.getItem("token");

  const posts = [
    {
      id: 1,
      title: "My First Blog Post",
      body: "This is a short introduction to my blog journey...",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      created_at: "2025-10-03",
    },
    {
      id: 2,
      title: "Exploring Nature",
      body: "Nature is full of wonders waiting to be explored...",
      imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      created_at: "2025-10-01",
    },
  ];

  if (!token) {
     return (
    <div className="signup-cta-container">
      <div className="signup-cta-content">
        <h2>Join the Cultiv Reads Community</h2>
        <p>
          Create your free account to explore personalized content and manage your own
          profile. Connect with other Cameroonian readers and writers sharing their stories.
        </p>
        <Link to="/signup" className="signup-cta-button">
          Sign Up to View Your Profile
        </Link>
      </div>
    </div>
  );
  }
  return (
    <div className="profile-page">
      <ProfileInfo
        name={user.name}
        email={user.email}
        bio={user.bio}
        profileImage={user.profileImage}
      />

      <div className="profile-actions">
        <Link to="/create-post" className="create-post-btn">
          + Create New Post
        </Link>
      </div>

      <UserPosts posts={posts} />
    </div>
  );
};

export default Profile;
