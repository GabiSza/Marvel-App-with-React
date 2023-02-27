import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MarvelNav.css";

function MarvelNav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar-brand" href="#">
            Marvel Minipedia
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "bi bi-list" : "bi bi-x"} />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul classname={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/MarvelGallery"
                  className="nav-Links"
                  onclick={closeMenu}
                >
                  Home
                </Link>
              </li>
            </ul>
            <ul classname={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/MarvelTimeline"
                  className="nav-Links"
                  onclick={closeMenu}
                >
                  Timeline
                </Link>
              </li>
            </ul>
            <ul classname={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/Recommendations"
                  className="nav-Links"
                  onclick={closeMenu}
                >
                  Recommendations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MarvelNav;
