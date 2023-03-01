import React, { useState } from "react";
import "../components/MarvelTimeline.css";

export default function MarvelTimeline() {
  // ARRAY OF MOVIES - MAP THROUGH BELOW
  /*const [movies, setMovies] = useState ([
    {
        id: 1,
        releaseDate: "2023",
        movieTitle: "Ant-Man and the Wasp: Quantumania"
    },
    {
        id: 1,
        releaseDate: 
        movieTitle:
    },
]);
*/

  return (
    <div className="timeline-container">
      <h2>Marvel Minipedia MCU Timeline</h2>

      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h4>2023</h4>
            <p>Ant-Man and the Wasp: Quantumania</p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h4>2022</h4>
            <p>Black Panther: Wakanda Forever</p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h4>2022</h4>
            <p>Thor: Love and Thunder</p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h4>2022</h4>
            <p>Doctor Strange in the Multiverse of Madness</p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h4>2021</h4>
            <p>Spider-Man: No Way Home</p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h4>2021</h4>
            <p>Eternals</p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h4>2021</h4>
            <p>Shang-Chi and the Legend of the Ten Rings</p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h4>2021</h4>
            <p>Black Widow</p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h4>RELEASE YEAR</h4>
            <p>MOVIE TITLE</p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h4>RELEASE YEAR</h4>
            <p>MOVIE TITLE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
