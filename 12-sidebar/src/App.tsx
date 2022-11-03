import React, { useState } from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Home setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Sidebar />
    </>
  );
}

export default App;
