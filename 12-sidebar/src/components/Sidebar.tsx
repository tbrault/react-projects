import React from "react";
import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data/data";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src={logo} alt="code addict" className="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </header>
      <div className="links">
        {links.map((link) => {
          return (
            <a key={link.id} href={link.url}>
              {link.icon}
              {link.text}
            </a>
          );
        })}
      </div>
      <footer className="social-icons">
        {social.map((s) => {
          return (
            <a key={s.id} href={s.url}>
              {s.icon}
            </a>
          );
        })}
      </footer>
    </aside>
  );
};

export default Sidebar;
