import React, { useState } from "react";

export default function MarvelList() {

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


return (
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
)
    
}
