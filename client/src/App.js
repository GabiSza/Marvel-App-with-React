import React, { useEffect, useState } from "react";
import "./App.css";
// IMPORT COMPONENTS HERE import ".components/ADDCOMPONENTS.css";
// MAYBE FORM, FAVORITE CHARACTERS, PRELOADED TIMELINE OF MARVEL MOVIES TO BE STORED ON DATABASE
import "./components/MarvelGallery";
import "./components/MarvelRecs";
import "./components/MarvelTimeline";

const HOME_URL = "https://api.themoviedb.org";
const API_KEY = "ccf583c0e68ae4c777227c8277f2a8b7";

function App() {
  // FORM INPUT - MARVEL CHARACTERS
  const [input, setInput] = useState("");
  // ARRAY OF MOVIES FEATURING CHARACTER SEARCHED
  const [characterMovies, setCharacterMovies] = useState({});

  // ADD FUNCTIONS - FIGURE OUT FUNCTIONS TO GET INFO FROM TMDB API

  //async function fetchMovieData(){
  //try {
  //const response = await fetch(URL);
  //const data = await response.json();
  //setCharacterMovies(data);
  //} catch (err) {
  //console.log("Error")
  //}
  //};

  const handleChange(){

  };

  const handleSubmit(){

  };

  

  return (
    <div className="App">
      <h1>MY Marvel MVP</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="character"
            placeholder="Marvel Character"
            value={characterMovies}
            onChange={handleChange}
          />
          <button type="submit">Search Marvel Character</button>
        </form>
      </div>
    </div>
  );
}

export default App;
