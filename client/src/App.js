import React, { useEffect, useState } from "react";
import "./App.css";
// IMPORT COMPONENTS HERE import ".components/ADDCOMPONENTS.css";
// MAYBE FORM, FAVORITE CHARACTERS, PRELOADED TIMELINE OF MARVEL MOVIES TO BE STORED ON DATABASE
import "./Components/MarvelGallery";
import "./Components/MarvelList";
import "./Components/MarvelRecs";
import "./Components/MarvelTimeline";

const HOME_URL = "https://api.themoviedb.org";
const API_KEY = "ccf583c0e68ae4c777227c8277f2a8b7";

function App() {
  // ARRAY OF MOVIES FEATURING CHARACTER SEARCHED
  const [movies, setMovies] = useState([]);
  // FORM INPUT
  const [characterSearch, setCharacterSearch] = useState("");

  // ADD FUNCTIONS - FIGURE OUT FUNCTIONS TO GET INFO FROM TMDB API

  async function fetchMovieData() {
    // UGH...
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      console.log("Error");
    }
  }

  //const useEffect(){};

  //const handleChange(){};

  //const handleSubmit(){};

  return (
    <div className="App">
      <h1>MY Marvel MVP</h1>

      <div>
        <h2>Featured In...</h2>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="character"
            placeholder="Marvel Character"
            value={character}
            onChange={handleChange}
          />
          <button type="submit">Search Marvel Character</button>
        </form>
      </div>
    </div>
  );
}

export default App;
