import React, { useEffect, useState } from "react";
import "./App.css";
// IMPORT COMPONENTS HERE import ".cmoponents/ADDCOMPONENTS.css";
  // MAYBE FORM, FAVORITE CHARACTERS, PRELOADED TIMELINE OF MARVEL MOVIES TO BE STORED ON DATABASE

// const URL = "ADD URL FOR TMDB API";
// const API_KEY = "ADD MY API KEY FOR TMDB";

function App() {
  // FORM INPUT - MARVEL CHARACTERS
  let [input, setInput] = useState("");
  // ARRAY OF MOVIES AND MAYBE TV SHOWS FEATURING FAVORITE CHARACTER
  let [characterMovies, setCharacterMovies] = useState({
    // LIST INFO TO BE INCLUDED
    // TITLE title:"",
    // YEAR year: 0,
    // CHARACTER ?  character: "",
  });

  // ADD FUNCTIONS - FIGURE OUT FUNCTIONS TO GET INFO FROM TMDB API


//async function fetchMovieData(){
  //try {
    //let response = await fetch(URL); // ADD URL VARIABLE ABOVE
    //let data = await response.json();
    //setCharacterMovies(data);
  //} catch (err) {
    // console.log("Error")
  }
//}


  return (
    <div className="App">

      <div className="container">
        <h1>Marvel MVP</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="character" placeholder="Marvel Character" value={characterMovies} onChange={handleChange}/>
          <button type="submit">Search Marvel Character</button>
        </form>
      </div>


    
    </div>
  );
};

export default App;