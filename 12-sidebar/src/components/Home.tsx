import React from "react";
import { FaBars } from "react-icons/fa";

type HomeProps = {
  setShowModal: Function;
};

const Home = ({ setShowModal }: HomeProps) => {
  return (
    <main>
      <FaBars className="sidebar-toggle" />
      <button className="btn" onClick={() => setShowModal(true)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
