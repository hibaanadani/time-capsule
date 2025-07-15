import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const name = location.state?.user?.name || "Guest";

  return (
    <div className="dash-page">
      <h2 className="dashboard-heading">Hello {name}!</h2>

      <p className="dash-subtext">
       Check your opened messages here!!
      </p>
    </div>
  );
};

export default Dashboard;
