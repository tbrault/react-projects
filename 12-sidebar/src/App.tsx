import React, { useState } from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <Home setShowModal={setShowModal} setShowSidebar={setShowSidebar} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
}

export default App;
