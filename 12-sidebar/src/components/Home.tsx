import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../context/context";
import { AppContextInterface } from "../interface/AppContextInterface";

const Home = () => {
  const { openModal, openSidebar } = useContext(
    AppContext
  ) as AppContextInterface;

  return (
    <main>
      <FaBars className="sidebar-toggle" onClick={() => openSidebar()} />
      <button className="btn" onClick={() => openModal()}>
        show modal
      </button>
    </main>
  );
};

export default Home;
