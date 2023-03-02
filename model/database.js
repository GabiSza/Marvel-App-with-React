require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "marvel",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists movielist; CREATE TABLE movielist(id INT NOT NULL AUTO_INCREMENT, releaseYear VARCHAR(255), title VARCHAR(255), marvelLink VARCHAR(2000), PRIMARY KEY (id));
    INSERT INTO movielist (releaseYear, title, marvelLink)
    VALUES
      ('2023', 'Ant-Man and the Wasp: Quantumania', 'https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania'),
      ('2022', 'Black Panther: Wakanda Forever', 'https://www.marvel.com/movies/black-panther-wakanda-forever'),
      ('2022', 'Thor: Love and Thunder', 'https://www.marvel.com/movies/thor-love-and-thunder'),
      ('2022', 'Doctor Strange in the Multiverse of Madness', 'https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness'),
      ('2021', 'Spider-Man: No Way Home', 'https://www.marvel.com/movies/spider-man-no-way-home'),
      ('2021', 'Eternals', 'https://www.marvel.com/movies/eternals" target="_blank'),
      ('2021', 'Shang-Chi and the Legend of the Ten Rings', 'https://www.marvel.com/movies/shang-chi-and-the-legend-of-the-ten-rings'),
      ('2021', 'Black Widow', 'https://www.marvel.com/movies/black-widow'); 
    ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

    console.log("Closing...");
  });

  con.end();
});
