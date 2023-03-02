const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// REMEMBER!! FOR MarvelList ROUTES START WITH /favorites
// DB STRUCTURE mysql/marvel/favorites/id, name

// REMEMBER!! FOR  MarvelTimeline ROUTES START WITH /movielist
// DB STRUCTURE mysql/marvel/movielist/id, releaseYear, title, marvelLink

/*router.listen(3000, () => {
  console.log("Server listening to http://localhost:3000");
});
*/

router.get("/", (req, res) => {
  res.send("Hello");
});

function getMovieList(req, res) {
  db("SELECT * FROM movielist")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

// GET ALL TIMELINE INFO
router.get("/movielist", async function (req, res) {
  getMovieList(req, res);
});

// GET ONE SUPERHERO
/*router.get("/:name", function (req, res) {
  db(`SELECT * FROM movielist WHERE name = ${req.params.name};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});


// ADD A SUPERHERO
router.post("/", function (req, res) {
  let { name } = req.body;
  let sql = `INSERT INTO movielist (name) VALUES ('${name}');`;
  db(sql)
    .then((results) => {
      getHeroes(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// DELETE A SUPERHERO
router.delete("/:id", function (req, res) {
  let sql = `DELETE FROM movielist WHERE id = ${req.params.id};`;
  db(sql)
    .then((results) => {
      getHeroes(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// EXTERNAL API

router.post("/marvel", async function (req, res, next) {
  const { name } = req.body; // GETS DATA RE FAVORITE ADDED
  const sql = `INSERT INTO marvel (name)
                VALUES('${name})`;

try {
    const result = await db("SELECT * FROM marvel");
    const movielist = result.data;
    res.send(marvel); // CHECK EVERYTHING IS MATCHING WITH FRONT END TERMS
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

  try {
    await db(sql);
    const result = await db("SELECT * FROM marvel");
    const movielist = results.data;
    res.send(marvel);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}); 
*/

module.exports = router;
