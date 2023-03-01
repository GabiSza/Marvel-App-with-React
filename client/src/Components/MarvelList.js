import React, { useEffect, useState } from "react";
import "./MarvelList.css";

let emptyList = { name: "" };

export default function MarvelList() {
  // ARRAY OF FAV HEROES
  let [favHeroes, setFavHeroes] = useState([]);
  // ARRAY OF HEROES ADDED
  let [newFav, setNewFav] = useState(emptyList);

  useEffect(() => {
    getFavHeroes();
  }, []);

  const getFavHeroes = () => {
    fetch(`/favorites`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Server responded: ${response.status}: ${response.statusText}"
          );
        }
        return response.json();
      })
      .then((favHeroes) => {
        setFavHeroes(favHeroes);
      })
      .catch((error) => {
        console.log("Network error: ", error.message);
      });
  };

  const addFavHeroes = async (favHeroes) => {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favHeroes),
    };
    fetch(`/favorites`, options)
      .then((res) => res.json())
      .then((favHeroes) => {
        setFavHeroes(favHeroes);
      })
      .catch((error) => console.log(error));
  };

  /*const deleteFavHero = (id) => {
    let options = {
      method: "DELETE",
    };
    fetch(`/favorites/${id}`, options)
      .then((res) => res.json())
      .then((favHeroes) => {
        setFavHeroes(favHeroes);
      })
      .catch((error) => console.log(error));
  };*/

  function handleChange(e) {
    setNewFav({ ...newFav, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addFavHeroes(newFav);
    setNewFav(emptyList);
  }

  return (
    <div className="container text-center">
      <section className="mb-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Add a Superhero"
            value={newFav.name}
            name="name"
            onChange={handleChange}
          />
          <button className="btn btn-primary ml-3" type="submit">
            Add Favorite Superheroes
          </button>
        </form>
      </section>

      <section className="list">
        <h3>Your Favorite Superheroes</h3>
        <div>
          {favHeroes.map((fav) => (
            <div key={newFav.id}>{newFav.name}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
