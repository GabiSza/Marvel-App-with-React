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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarvelGallery;
