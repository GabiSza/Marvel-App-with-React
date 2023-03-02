import React, { useEffect, useState } from "react";
import { response } from "../../../app";
import "../components/MarvelTimeline.css";

let emptyTimeline = {id: "", releaseYear: "", title: "", marvelLink: "" }; 

export default function MarvelTimeline() {

  // ARRAY OF MOVIES - MAP THROUGH BELOW
  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    getMovies();
  }), []};

  const getMovies = () => {
    fetch(`/movielist`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Server responded: ${response.status}: ${response.statusText}"
          );
        }
        return response.json();
      })
      .then((movies) => {
        setmovies(movies);
      })
      .catch((error) => {
        console.log("Network error: ", error.message);
      });
  };

  return (
    <div className="timeline-container">
      <h2>Marvel Cinematic Universe Timeline</h2>

      <div className="timeline">
        <div className="container">
          <div className="content">
            <h6 key={movies.id}>{movies.releaseYear}</h6>
            <p key={movies.id}>{movies.title}</p>
            <p key={movies.id}>
              <a
                href="{movies.marveLink}"
                target="_blank"
              >
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