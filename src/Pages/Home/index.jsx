import React from "react";
import "./style.css";
import { useNavigate, Link, Outlet } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="home-nav">
        <Link to="dashboard" className="nav-link">
          Home
        </Link>
        <Link to="users" className="nav-link">
          Users
        </Link>
        <Link to="posts" className="nav-link">
          Posts
        </Link>
        <button onClick={() => navigate("/auth")} className="logout-button">
          Logout
        </button>
      </nav>
      <div className="home-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
