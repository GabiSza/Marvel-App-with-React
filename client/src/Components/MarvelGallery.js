import React, { useState } from "react";
import "./MarvelGallery.css";

function MarvelGallery({ allHeroes }) {
  const [featuredHero, setFeaturedHero] = useState({});

  return (
    <div>
      <h2>My Marvel Superheroes</h2>
      <div id="container-grid">
        <div id="grid">
          {allHeroes.map((hero) => (
            <div key={hero.id}>
              <img src={hero.url} onClick={() => setFeaturedHero(hero)} />
              <h5>{hero.title}</h5>
            </div>
          ))}
        </div>
        <div id="featured">
          <div>
            <h3>Featured Superhero</h3>
            <p>{featuredHero.title}</p>
            <img src={featuredHero.url} />
            <div className="row">
              <div className="col">
                <h3>SUPERHERO IMAGE</h3>
                Here is an image of your selected superhero...
              </div>
              <div className="col">
                <h3>SUPERHERO STATS</h3>
                Non-superhero name, age, bio stuff...
              </div>
              <div className="col">
                <h3>SUPERHERO MOVIES </h3>
                Multiverse Of Madness, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarvelGallery;
