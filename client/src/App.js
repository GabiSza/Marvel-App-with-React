import React, { useEffect, useState } from "react";
import MarvelGallery from "./components/MarvelGallery";
import MarvelList from "./components/MarvelList";
import MarvelTimeline from "./components/MarvelTimeline";
import MarvelRecs from "./components/MarvelRecs";
//import banner from "client/src/assets/banner.jpg";
import "./App.css";
import "./";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                <Link to="/">Superhero Gallery</Link>
              </a>
              <a className="nav-link" href="#">
                <Link to="/timeline">MCU Timeline</Link>
              </a>
              <a className="nav-link" href="#">
                <Link to="/list">Favorite Superheroes</Link>
              </a>
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Watch More!
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="marvel-mini-banner">
        <img
          src="https://en.ephoto360.com/share_image/2023/03/63ff3925e58d8.jpg"
          alt="MM logo"
        />
      </div>

      <>
        <Routes>
          <Route path="/" element={<MarvelGallery />} />
          <Route path="/timeline" element={<MarvelTimeline />} />
          <Route path="/list" element={<MarvelList />} />
          <Route path="/recs" element={<MarvelRecs />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
