var express = require("express");
var router = express.Router();

router.get("/marvel", async function (req, res, next) {
  try {
    const result = await db("SELECT * FROM marvel");
    const favorites = result.data;
    res.send(marvel); // CHECK EVERYTHING IS MATCHING WITH FRONT END TERMS
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/marvel", async function (req, res, next) {
  const { name } = req.body; // GETS DATA RE MOVIE ADDED
  const sql = `INSERT INTO marvel (name)
                VALUES('${name})`;

  try {
    await db(sql);
    const result = await db("SELECT * FROM marvel");
    const favorites = results.data;
    res.send(marvel);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
