import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data/data";
import logo from "../assets/logo.svg";


const Navbar = (): JSX.Element => {
  const [showLinks, setShowLinks] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };


  useEffect(() => {}, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <header className="nav-header">
          <img src={logo} alt={logo} />
          <button className="nav-toggle" onClick={handleClick}>
            <FaBars />
          </button>
        </header>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
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
