import React, { useEffect, useState } from "react";
import "./App.css";

// IMPORT COMPONENTS HERE - FORM, LIST, TIMELINE, GALLERY, RECOMMENDATIONS, ETC.
//import MarvelGallery from "./components/MarvelGallery";
//import MarvelList from "./components/MarvelList";
//import MarvelRecs from "./components/MarvelRecs";
//import MarvelTimeLine from "./components/MarvelTimeline";

// MAYBE USE LATER...
//const HOME_URL = "https://api.themoviedb.org/3/";
//const API_KEY = "ccf583c0e68ae4c777227c8277f2a8b7";

export default function App() {
  //ARRAY OF MOVIES FEATURING CHARACTER SEARCHED
  const [movies, setMovies] = useState([]);
  //FORM INPUT
  const [characterSearch, setCharacterSearch] = useState("");

  // ADD FUNCTIONS

  useEffect(() => {
    getHeroes();
  }, []);

  const getHeroes = () => {
    fetch(``);
  };

  /*async function fetchMovieData() {
    UGH... WORk ON THIS FUNCTION
    try {
      const API_KEY = "ccf583c0e68ae4c777227c8277f2a8b7";
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?${API_KEY}&media_type=movie`);
      const data = await response.json();
      setMovies(resp.data.results);
    } catch (err) {
      console.log("Error");
    }
  */
  //}

  // API
  // GET SEARCH MOVIES https://api.themoviedb.org/3/search/movie?api_key=API KEY HERE&language=en-US&query=KEYWORDHERE

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
          <h3>Intro to the App</h3>
          The Marvel Universe is vast and awe-inspiring!
        </div>

        <div>
          <form>
            <h3>Choose Your Favorite Superhero!</h3>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="Spider-Man">Spider-Man</option>
              <option value="Doctor Strange">Doctor Strange</option>
              <option value="Thor">Thor</option>
              <option value="Loki">Loki</option>
              <option value="Iron Man">Iron Man</option>
              <option value="Captain America">Captain America</option>
              <option value="Hulk">Hulk</option>
              <option value="Black Widow">Black Widow</option>
              <option value="Hawkeye">Hawkeye</option>
              <option value="Nick Fury">Nick Fury</option>
              <option value="Thor">Thor</option>
              <option value="Thor">Thor</option>
            </select>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <h3>Column 1</h3>
            All the stuff you want to know about Spider-Man....
          </div>
          <div className="col">
            <h3>Column 2</h3>
            All the stuff you want to know about Doctor Strange...
          </div>
          <div className="col">
            <h3>Column 3</h3>
            All the stuff you want to know about Thor...
          </div>
        </div>
        <div>
          <h3>We may need cards...</h3>
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src="https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
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
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
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
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
