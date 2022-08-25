import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "../../02-tours/src/App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
