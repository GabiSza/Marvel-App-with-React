import React, { useEffect, useState } from "react";
import "../components/MarvelTimeline.css";

//let emptyTimeline = { id: "", releaseYear: "", title: "", marvelLink: "" };

export default function MarvelTimeline() {
  // ARRAY OF MOVIES - MAP THROUGH BELOW
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      let response = await fetch("/movielist");
      let data = await response.json();
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="timeline-container">
      <h2>Marvel Cinematic Universe Timeline</h2>

      <div className="timeline">
        <div className="container">
          <div className="content">
            {movies.map((movie) => (
              <div key={movie.id}>
                <h6>{movie.releaseYear}</h6>

                <p>{movie.title}</p>

                <p>
                  <a href={movie.marvelLink} target="_blank">
                    Explore More at Marvel.com
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
