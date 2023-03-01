import React, { useEffect, useState } from "react";
import "./MarvelGallery.css";

function MarvelGallery() {
  //const [gallery, setGallery] = useState(true);

  const [heroes, setHeroes] = useState([
    {
      id: 1,
      title: "Spider-Man",
      url: "https://assets-prd.ignimgs.com/2022/06/23/no-way-home-1655920834906-1655994176936.jpg?fit=bounds&width=1280&height=720&dpr=2",
      description:
        "Spider-Man, aka Peter Benjamin Parker, was bitten by a radioactive spider when he was 14.  He developed spider-like superpowers including super strength and super speed - and the ability to stick to walls - that enabled him to fight crime in New York City and beyond.",
      movieList:
        "Spider-Man: No Way Home, Spider-Man: Far From Home, Spider-Man: Into the Spider-Verse, Spider-Man: Homecoming",
    },
    {
      id: 2,
      title: "Doctor Strange",
      url: "https://cdn.vox-cdn.com/thumbor/Tw_9o2V9Z88ct0A94PitWiim9j8=/0x0:5181x2914/1400x1050/filters:focal(1371x320:2199x1148):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51721691/DoctorStrangeZappity.0.jpg",
      description:
        "Doctor Strange, aka Stephen Vincent Strange, was a brilliant neurosurgeon whose hands were crushed beyond repair in a car accident that occured because he was looking at a patient x-ray while driving to dinner one night. Although he underwent an extensive surgery and grueling physical therapy, his hands remained unusable.  He traveled to Nepal in search of Kamar-Taj and the Ancient One and became trained in the Mystic Arts under Karl Mordo. He became the protector of the Sanctum Sanctorum and protects the Earth from inter-dimensional threats.",
      movieList:
        "Doctor Strange in the Multiverse of Madness, Spider-Man: No Way Home, Avengers: Endgame, Avengers: Infinity War, Thor: Ragnarok, Doctor Strange",
    },
    {
      id: 3,
      title: "Thor",
      url: "https://www.pinkvilla.com/imageresize/brett_goldstein_hercules_thor_4.jpg?width=752&t=pvorg",
      description:
        "Thor, aka Thor Odinson, is the Asgardian God of Thunder and a founding member of the Avengers. Thor weilds a mighty hammer called Mjolnir.",
      movieList:
        "Thor: Love and Thunder, Avengers: Endgame, Avengers: Infinity War, Thor: Ragnarok, Doctor Strange, Avengers: Age of Ultron, Thor: The Dark World, The Avengers, Thor",
    },
    {
      id: 4,
      title: "Shang-Chi",
      url: "https://i.pinimg.com/564x/1a/55/a1/1a55a11bbc6a060845edd58ced0f396a.jpg",
      description:
        "Shang-Chi, aka Xu Shang-Chi, was raised at the Ten Rings Headquarters in the mountains of China where he underwent intense martial arts training. After avenging his mother's death, he fled to the United States to start a new life. Altough he changed his name to Shaun and tried to live a normal life, he was eventually drawn back into the mysterious world of the Ten Rings.",
      movieList: "Shang-Chi and the Legend of the Ten Rings",
    },
    {
      id: 5,
      title: "Another Superhero",
      url: "https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Superhero stuff...",
      movieList:
        "Another Superhero the Sequel, Another Superhero the Middle Movie, Another Superhero the Original Movie",
    },
    {
      id: 6,
      title: "Another Superhero",
      url: "https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Superhero stuff...",
      movieList:
        "Another Superhero the Sequel, Another Superhero the Middle Movie, Another Superhero the Original Movie",
    },
    {
      id: 7,
      title: "Another Superhero",
      url: "https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Superhero stuff...",
      movieList:
        "Another Superhero the Sequel, Another Superhero the Middle Movie, Another Superhero the Original Movie",
    },
    {
      id: 8,
      title: "Another Superhero",
      url: "https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Superhero stuff...",
      movieList:
        "Another Superhero the Sequel, Another Superhero the Middle Movie, Another Superhero the Original Movie",
    },
  ]);

  const [featuredHero, setFeaturedHero] = useState({});

  return (
    <div>
      <div className="container-gallery">
        <div id="gallery-view">
          <h3>My Marvel Superheroes</h3>
          <div id="container-grid">
            <div id="grid">
              {heroes.map((hero) => (
                <div key={hero.id}>
                  <h5>{hero.title}</h5>
                  <img src={hero.url} onClick={() => setFeaturedHero(hero)} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="featured">
          <div>
            <h2>Featured Superhero</h2>
            <h4>{featuredHero.title}</h4>
            <img src={featuredHero.url} />
            <div className="row">
              <div className="col">
                <h3>Who Is {featuredHero.title}?</h3>
                <p>{featuredHero.description}</p>
              </div>
              <div className="col">
                <h3>See {featuredHero.title} In These Movies </h3>
                <p>{featuredHero.movieList}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarvelGallery;
