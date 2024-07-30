import React, { useState } from "react";
import "./loginmodal.css";

const LoginModal = ({ closeModal, onLogin, onLogout, loggedIn }) => {
  const [view, setView] = useState("login");

  const handleLogin = () => {
    onLogin();
    closeModal();
  };

  const handleSignup = () => {
    onLogin();
    closeModal();
  };

  const handleLogout = () => {
    onLogout();
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (view === "login") {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>
          {loggedIn ? "Welcome Back" : view === "login" ? "Login" : "Signup"}
        </h2>
        {loggedIn ? (
          <div className="welcome-container">
            <p>You are already logged in!</p>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {view === "login" ? (
                <>
                  <div className="form-group">
                    <label htmlFor="login-email">Email:</label>
                    <input
                      type="email"
                      id="login-email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">Password:</label>
                    <input
                      type="password"
                      id="login-password"
                      name="password"
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="signup-name">Full Name:</label>
                    <input type="text" id="signup-name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-email">Email Address:</label>
                    <input
                      type="email"
                      id="signup-email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-password">Password:</label>
                    <input
                      type="password"
                      id="signup-password"
                      name="password"
                      required
                    />
                  </div>
                </>
              )}
              <button type="submit" className="btn btn-full">
                Continue
              </button>
            </form>
            <div className="toggle-buttons">
              <button
                className={`toggle-btn ${view === "login" ? "active" : ""}`}
                onClick={() => setView("login")}
              >
                Login
              </button>
              <button
                className={`toggle-btn ${view === "signup" ? "active" : ""}`}
                onClick={() => setView("signup")}
              >
                Signup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
