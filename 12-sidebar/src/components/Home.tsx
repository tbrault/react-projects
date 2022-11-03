import React from "react";
import { FaBars } from "react-icons/fa";

type HomeProps = {
  setShowModal: Function;
  setShowSidebar: Function;
};

const Home = ({ setShowModal, setShowSidebar }: HomeProps) => {
  return (
    <main>
      <button onClick={() => setShowSidebar(true)}>
        <FaBars className="sidebar-toggle" />
      </button>
      <button className="btn" onClick={() => setShowModal(true)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
