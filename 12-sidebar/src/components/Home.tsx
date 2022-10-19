import React from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <FaBars className="sidebar-toggle" />
      <button className="btn">show modal</button>
    </main>
  );
};

export default Home;
