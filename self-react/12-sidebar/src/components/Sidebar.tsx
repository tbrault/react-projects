import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data/data";
import { AppContext } from "../context/context";
import { AppContextInterface } from "../interface/AppContextInterface";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useContext(
    AppContext
  ) as AppContextInterface;

  return (
    <aside className={`${showSidebar && "show-sidebar"} sidebar`}>
      <header className="sidebar-header">
        <img src={logo} alt="code addict" className="logo" />
        <button className="close-btn" onClick={() => closeSidebar()}>
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
