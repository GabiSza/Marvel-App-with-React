import React, { useEffect, useState } from "react";
import "./MarvelGallery.css";
import {Link, useParams} from 'react-router-dom';

function MarvelGallery() {
  //const [gallery, setGallery] = useState(true);

  const [heroes, setHeroes] = useState([
    {
      id: 1,
      title: "Spider-Man",
      url: "https://assets-prd.ignimgs.com/2022/06/23/no-way-home-1655920834906-1655994176936.jpg?fit=bounds&width=1280&height=720&dpr=2",
      description:
        "Spider-Man, aka Peter Benjamin Parker, was bitten by a radioactive spider when he was 14.  He developed spider-like superpowers including super strength and super speed - and the ability to stick to walls - that enabled him to fight crime in New York City and beyond.",
      movieList1: "Spider-Man: No Way Home",
      movieList2: "Spider-Man: Far From Home",
      movieList3: "Spider-Man: Into the Spider-Verse",
      movieList4: "Spider-Man: Homecoming",
    },
    {
      id: 2,
      title: "Doctor Strange",
      url: "https://media.timeout.com/images/103585759/750/422/image.jpg",
      description:
        "Doctor Strange, aka Stephen Vincent Strange, was a brilliant neurosurgeon whose hands were crushed beyond repair in a car accident that occured because he was looking at a patient x-ray while driving to dinner one night. Although he underwent an extensive surgery and grueling physical therapy, his hands remained unusable.  He traveled to Nepal in search of Kamar-Taj and the Ancient One and became trained in the Mystic Arts under Karl Mordo. He became the protector of the Sanctum Sanctorum and protects the Earth from inter-dimensional threats.",
      movieList1: "Doctor Strange in the Multiverse of Madness",
      movieList2: "Spider-Man: No Way Home",
      movieList3: "Avengers: Endgame",
      movieList4: "Doctor Strange",
    },
    {
      id: 3,
      title: "Thor",
      url: "https://sm.ign.com/ign_es/gallery/h/how-to-wat/how-to-watch-the-thor-movies-in-chronological-order_qurm.jpg",
      description:
        "Thor, aka Thor Odinson, is the Asgardian God of Thunder and a founding member of the Avengers. Thor weilds a mighty hammer called Mjolnir.",
      movieList1: "Thor: Love and Thunder",
      movieList2: "Thor: Ragnarok",
      movieList3: "Thor: The Dark World",
      movieList4: "Thor",
    },
    {
      id: 4,
      title: "Shang-Chi",
      url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/08/shang-chi-leyenda-diez-anillos-2435219.jpg?itok=Du92k7e7",
      description:
        "Shang-Chi, aka Xu Shang-Chi, was raised at the Ten Rings Headquarters in the mountains of China where he underwent intense martial arts training. After avenging his mother's death, he fled to the United States to start a new life. Altough he changed his name to Shaun and tried to live a normal life, he was eventually drawn back into the mysterious world of the Ten Rings.",
      movieList1: "Shang-Chi and the Legend of the Ten Rings",
      movieList2: "",
      movieList3: "",
      movieList4: "",
    },
    {
      id: 5,
      title: "Black Widow",
      url: "https://media.vanityfair.com/photos/60db2c1c1f78165f1cf8fbf2/3:2/w_1998,h_1332,c_limit/black-widow-film-2021-01.jpg",
      description: "Natasha Romanoff was trained as an agent under the Black Widow Program. As a longtime opponent of the Avengers, Hawkeye was sent to get rid of her… but he saved her instead.Completely turning her back on her old life, Black Widow becomes a member of both the Avengers and SHIELD. She didn’t lose her torturous ways, though, preferring to use brutality against villains.",
      movieList1: "Marvel's The Avengers",
      movieList2: "Captain America: The Winter Soldier",
      movieList3: "Avengers: Age of Ultron",
      movieList4: "Captain America: Civil War",
      movieList5: "Avengers: Infinity War",
      movieList6: "Avengers: Endgame",
      movieList7: "Black Widow",
    },
    {
      id: 6,
      title: "Phoenix",
      url: "https://cdn.vox-cdn.com/thumbor/iP5-6kPIaTi6PUqleIzle2fWXmM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16326879/image_asset.jpeg",
      description: "As far as she could remember, Jean Grey, aka Phoenix, has always had telekinetic abilities. She is one of the founding members of the X-men and is an instructor at Professor X’s school. She is extremely compassionate and always puts other people first. She believes in peace and hopes that humans and mutants will be able to coexist without prejudice one day. ",
      movieList1: "X-Men: Apocalypse",
      movieList2: "Dark Phoenix",
    },
    {
      id: 7,
      title: "Black Panther",
      url: "https://static01.nyt.com/images/2018/02/20/us/black-panther-watching/black-panther-watching-superJumbo-v2.jpg",
      description: "Black Panther is a title that is passed down to the King of Wakanda. The black and silver suit is made from vibranium, one of the strongest elements in the Marvel universe. He is one of the greatest heroes, always ready to defend Wakanda against anyone who threatens to disrupt its peace.",
      movieList1: "Black Panther",
      movieList2: "Black Panther: Wakanda Forever",
    },
    {
      id: 8,
      title: "Scarlet Witch",
      url: "https://cdn.murphysmultiverse.com/wp-content/uploads/2022/12/scarletwitchdead.jpg",
      description: "Wanda Maximoff, aka Scarlet Witch, was initially a supervillain on Team Magneto. She wields incredible power and can even be the strongest in the entire Marvel Universe. She realizes that she is fighting for the wrong team and joins our heroes. She is incredibly caring to those important to her and is devoted to protecting innocents. ",
      movieList1: "Another Superhero the Sequel",
      movieList2: "Another Superhero the Middle Movie",
      movieList3: "Another Superhero the Original Movie",
      movieList4: "",
    },
  ]);

  const [featuredHero, setFeaturedHero] = useState({
    url: "https://i.pinimg.com/564x/d8/a1/ea/d8a1ea774a17c771d1002da2eb7bd3df.jpg",
  });

  return (
    <div className="container-for-gallery" >
      <div className="container-gallery">
        <div id="container-grid">
          <div id="grid">
            {heroes.map((hero) => (
              <div key={hero.id}>
                <h5>{hero.title}</h5>
                <img src={hero.url} onClick={() => setFeaturedHero(hero)} />
              </div>
            ))}
          </div>
          <div id="featured">
            <div>
              <img src={featuredHero.url} />
              <div className="row">
                <div className="col">
                  <h3>Who is {featuredHero.title}?</h3>
                  <p>{featuredHero.description} </p>
                </div>
                <div className="col">
                  <h3>See {featuredHero.title} In These Movies </h3>
                  <p>{featuredHero.movieList1}</p>
                  <p>{featuredHero.movieList2}</p>
                  <p>{featuredHero.movieList3}</p>
                  <p>{featuredHero.movieList4}</p>
                  <p>{featuredHero.movieList5}</p>
                  <p>{featuredHero.movieList6}</p>
                  <p>{featuredHero.movieList7}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarvelGallery;
