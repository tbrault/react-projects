import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "../../01-birthday-reminder/src/App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
