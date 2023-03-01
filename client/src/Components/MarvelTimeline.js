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
      <h2>Marvel Cinematic Universe Timeline</h2>

      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h6>2023</h6>
            <p>Ant-Man and the Wasp: Quantumania</p>
            <p>
              <a
                href="https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania"
                target="_blank"
              >
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h6>2022</h6>
            <p>Black Panther: Wakanda Forever</p>
            <p>
              <a
                href="https://www.marvel.com/movies/black-panther-wakanda-forever"
                target="_blank"
              >
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h6>2022</h6>
            <p>Thor: Love and Thunder</p>
            <p>
              <a
                href="https://www.marvel.com/movies/thor-love-and-thunder"
                target="_blank"
              >
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h6>2022</h6>
            <p>Doctor Strange in the Multiverse of Madness</p>
            <p>
              <a
                href="https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness"
                target="_blank"
              >
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h6>2021</h6>
            <p>Spider-Man: No Way Home</p>
            <p>
              <a
                href="https://www.marvel.com/movies/spider-man-no-way-home"
                target="_blank"
              >
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h6>2021</h6>
            <p>Eternals</p>
            <p>
              <a href="https://www.marvel.com/movies/eternals" target="_blank">
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h6>2021</h6>
            <p>Shang-Chi and the Legend of the Ten Rings</p>
            <p>
              <a
                href="https://www.marvel.com/movies/shang-chi-and-the-legend-of-the-ten-rings"
                target="_blank"
              >
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h6>2021</h6>
            <p>Black Widow</p>
            <p>
              <a
                href="https://www.marvel.com/movies/black-widow"
                target="_blank"
              >
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h6>RELEASE YEAR</h6>
            <p>MOVIE TITLE</p>
            <p>
              <a href="" target="_blank">
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h6>RELEASE YEAR</h6>
            <p>MOVIE TITLE</p>
            <p>
              <a href="" target="_blank">
                Explore More at Marvel.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
