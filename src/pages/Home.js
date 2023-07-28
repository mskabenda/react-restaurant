import React from "react";
import { Link } from "react-router-dom";
import dish4 from "../assets/dish4.jpg"; // Make sure the file extension is correct (e.g., dish4.jpg)
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${dish4})` }}>
      <div className="headerContainer">
        <h1>Sanyu</h1>
        <p>Discover the Spice of Africa: East African Flavors, Exquisite Dining! </p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
