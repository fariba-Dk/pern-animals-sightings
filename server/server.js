const express = require("express");
const cors = require("cors");

//FOR DEVELOPMENT or FOR PRODUCTION environment variables ===Environment variables are, in short, variables that describe the environment in which apps and programs run

require("dotenv").config();

// const db = require('../server/db/db-connection.js');
const db = require("./db/db-connection");

//creating an instance of express
const app = express();

//if this env val is defined we set port to that value : else => 5005

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json()); //req.body

//GET -
//ORM obj ref mapping
app.get("/animals/", async (req, res, next) => {
  try {
    const allAnimals = await db.query("SELECT * FROM animals");
    console.log(allAnimals.rows);
    res.json(allAnimals.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/users/", async (req, res, next) => {
  // console.log(req);
  console.log("users", req.query);
  try {
    const allUsers = await db.query("SELECT * FROM users");
    console.log(allUsers.rows);
    res.json(allUsers.rows);
  } catch (error) {
    console.error(error);
  }
});
//CREATE A SEEKER
const createSeeker = (body) => {
  return new Promise(function (resolve, reject) {
    // const { name, nick_name, email } = body;
    pool.query(
      "INSERT INTO users (name, nick_name, email) VALUES ($1, $2, $3) RETURNING *",
      [name, nick_name, email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new user has been added added: ${results.rows[0]}`);
      }
    );
  });
};
// POST - ROUTE - SEEKER
app.post("/users", (req, res) => {
  connectionString
    .createSeeker(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//POST ROUTE ANIMALS
app.post("/animals", cors(), async (req, res) => {
  try {
    const { commonname, creation_timestamp, scientificname, healthy } =
      await req.body;

    const result = await db.query(
      "INSERT INTO animals(commonname, scientificname, creation_timestamp, healthy) VALUES($1, $2, $3, $4) RETURNING *",
      [commonname, scientificname, creation_timestamp, !!healthy] // !! bc healthy can only take boolean
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.error(400).send("error creating animal");
  }
});

app.delete("/animals/:id", cors(), async (req, res) => {
  const { id } = req.params; // NOTE: DELETE req uses params over query or body
  try {
    await db.query("DELETE from animals where id=$1", [id]);
    res.json({ message: `successfully deleted animal ${id}` });
  } catch (error) {
    res.error(400).send(`error deleting animal ${res}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
