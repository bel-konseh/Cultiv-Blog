import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContinueToLogin.css";

const ContinueToLogin = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <div className="verification-container">
      <h1 className="verification-title">Email Verification</h1>
      <p className="verification-message">
        Please check your email for verification link.
      </p>
      <p>verified?</p>
      <button className="verification-button" onClick={handleContinue}>
        Continue To Sign In
      </button>
    </div>
  );
};

export default ContinueToLogin;
