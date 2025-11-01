import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = ({ name, email, bio, profileImage }) => {
  return (
    <div className="profile-info">
      <div className="profile-info2">
        <div className="profile-image-container">
        <img
          src={
            profileImage ||
            "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          }
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="profile-details">
        <h2>{name}</h2>
        <p className="email">{email}</p>
        <p className="bio">{bio}</p>
      </div>
      </div>
      
      <div className="buttons">
        <button className="btn1">Edit Profile</button>
        <button className="btn2">Share Profile</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
