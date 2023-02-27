import React, { useEffect, useState } from "react";
//import MarvelGallery from "./components/MarvelGallery";
//import MarvelList from "./components/MarvelList";
//import MarvelTimeLine from "./components/MarvelTimeline";
//import MarvelRecs from "./components/MarvelRecs";
import "./App.css";
import "./";

function App() {
  const [heroes, setHeroes] = useState([
    {
      id: 1,
      title: "Spider-Man",
      url: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Laboris laboris Lorem adipisicing cupidatat aute do quis anim. Ut irure occaecat ad nulla labore deserunt. Eiusmod minim ut cupidatat ea exercitation irure cupidatat. Quis mollit Lorem eu tempor aliquip anim sint. Reprehenderit elit commodo laborum consequat adipisicing eu.",
      MCUlist: "ADD Spider Man Movies",
    },
    {
      id: 2,
      title: "Doctor Strange",
      url: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Ea cupidatat ex ex elit duis non proident tempor adipisicing. Aliqua velit ullamco duis nulla quis. Sint labore irure tempor sint veniam quis sit esse irure minim enim et velit pariatur. Eiusmod eiusmod esse voluptate labore nisi officia nisi.",
      MCUlist: "ADD Doctor Strange Movies",
    },
    {
      id: 3,
      title: "Thor",
      url: "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Eu occaecat ea Lorem adipisicing laborum. Eiusmod laboris magna laboris exercitation consequat adipisicing incididunt. Ut qui cupidatat occaecat et amet sit in ea. Reprehenderit velit id enim ad incididunt anim Lorem aute veniam pariatur ullamco proident dolore.",
      MCUlist: "ADD Thor Movies",
    },
    {
      id: 4,
      title: "Moon Knight",
      url: "https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Et reprehenderit nisi dolore cupidatat. Nulla anim et fugiat pariatur sit do ut duis ex ullamco deserunt dolor culpa duis. Deserunt duis consectetur sint enim fugiat qui minim pariatur elit proident sunt non esse dolor.",
      MCUlist: "ADD Moon Knight Movies",
    },
  ]);
  const [featuredHero, setFeaturedHero] = useState({});

  /*  const options = [
    { label: "Spider-Man", value: "Spider-Man" },
    { label: "Doctor Strange", value: "Doctor_Strange" },
    { label: "Thor", value: "Thor" },
    { label: "Loki", value: "Loki" },
    { label: "Iron Man", value: "Iron_Man" },
    { label: "Captain America", value: "Captain_America" },
    { label: "Hulk", value: "Hulk" },
    { label: "Black Widow", value: "Black_Widow" },
    { label: "Hawkeye", value: "Hawkeye" },
  ];
  */

  //DROPDOWN SELECTION
  //const [heroSelect, setHeroSelect] = useState();

  /*const handleChange = (event) => {
    setHeroSelect(event.target.value);
  };
  */

  // ADD FUNCTIONS

  //useEffect(() => {
  //  getHeroes();
  //}, []);

  //const getHeroes = () => {
  //  fetch(``);
  //};

  //const handleChange(){};

  //const handleSubmit(){};

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Marvel MVP
          </a>
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
                Home
              </a>
              <a className="nav-link" href="#">
                Gallery
              </a>
              <a className="nav-link" href="#">
                Timeline
              </a>
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Coming Soon!! Recommendations
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1 className="text-center">My Marvel MVP</h1>

        <div>
          <h2>My Marvel Superheroes</h2>
          <div id="container-grid">
            <div id="grid">
              {heroes.map((hero) => (
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
                    <h3>{featuredHero.title} Essential Stats </h3>
                    Non-superhero name, age, bio stuff...
                    <p>{featuredHero.description}</p>
                  </div>
                  <div className="col">
                    <h3>{featuredHero.title} Movies </h3>
                    See {featuredHero.title} in these Marvel Cinematic Universe
                    movies...
                    <p>{featuredHero.MCUlist}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>ADD HEADER HERE</h3>
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src="https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">MCU Timeline</h5>
                  <p className="card-text">
                    MCU chronological time. Super important.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Timeline!
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Superhero Gallery</h5>
                  <p className="card-text">
                    Gallery of super exciting superheroes in action.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Gallery!
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Your Favorites</h5>
                  <p className="card-text">Save your favorite superheroes.</p>
                  <a href="#" className="btn btn-primary">
                    My Superheroes!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form>
          <h3>Choose Your Favorite Superhero!</h3>
          <select
            className="form-select"
            aria-label="Default select example"
            //value={value}
            //onChange={handleChange}
          ></select>
        </form>
      </div>
    </div>
  );
}

export default App;
