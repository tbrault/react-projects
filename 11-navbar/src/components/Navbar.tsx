import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../data/data";
import logo from "../assets/logo.svg";

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <div className="nav-center">
        <header className="nav-header">
          <img src={logo} alt={logo} />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </header>

        <div className="links-container show-container">
          <ul className="links">
            {links.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
