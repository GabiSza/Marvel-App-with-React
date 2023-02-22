var express = require("express");
var router = express.Router();
const db = require(".../model/helper");

// REMEMBER!! ALL ROUTES START WITH /movielist 
// DB STRUCTURE mysql/marvel/movielist/id, name, movieOne, movieTwo, movieThree

// HELPER FUNCTION

function getHeroes(req, res) {
  db("SELECT * FROM movielist")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
}

// GET ALL SUPERHEROES
router.get("/", function (req, res) {
  getHeroes(req, res);
});

// GET ONE SUPERHERO
router.get("/:name", function(req, res) {
  db(`SELECT * FROM movielist WHERE name = ${req.params.name};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

// ADD A SUPERHERO - NOT SURE I NEED THIS ROUTE??
router.post("/", function(req, res) {
  let { name } = req.body;
  let sql = `INSERT INTO movielist (name) VALUES ('${name}');`;
  db(sql)
  .then(results => {
    getHeroes(req, res);
  })
  .catch(err => res.status(500).send(err));
});

// DELETE A SUPERHERO - NOT SURE I NEED THIS ROUTE EITHER??
router.delete("/:id", function(req, res) {
  let sql = `DELETE FROM movielist WHERE id = ${req.params.id};`;
  db(sql)
  .then(results => {
    getHeroes(req, res);
  })
  .catch(err => res.status(500).send(err));
});






  

// EXTERNAL API
/*
router.post("/marvel", async function (req, res, next) {
  const { name } = req.body; // GETS DATA RE FAVORITE ADDED
  const sql = `INSERT INTO marvel (name)
                VALUES('${name})`;

try {
    const result = await db("SELECT * FROM marvel");
    const favorites = result.data;
    res.send(marvel); // CHECK EVERYTHING IS MATCHING WITH FRONT END TERMS
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

  try {
    await db(sql);
    const result = await db("SELECT * FROM marvel");
    const favorites = results.data;
    res.send(marvel);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}); 
*/

module.exports = router;
