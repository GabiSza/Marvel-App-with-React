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
    <div>
      <h1>My Marvel MVP</h1>

      <div>
        <h2>Featured In...</h2>
      </div>

      <div>
        <form>
          <input type="text" name="character" placeholder="Marvel Character" />
          <button>Search Marvel Character</button>
        </form>
      </div>
    </div>
  );
}
