const express = require('express');
const cors = require('cors');

//FOR DEVELOPMENT or FOR PRODUCTION environment variables ===Environment variables are, in short, variables that describe the environment in which apps and programs run

require('dotenv').config();

// const db = require('../server/db/db-connection.js');
const db = require('./db/db-connection');

//creating an instance of express
const app = express();

//if this env val is defined we set port to that value : else => 5005

const PORT = process.env.PORT || 5005;

app.use(cors());

app.use(express.json()); //req.body

//GET -
app.get('/animals/', async (req, res, next) => {
  try {
    const allAnimals = await db.query('SELECT * FROM animals');
    console.log(allAnimals.rows);
    res.json(allAnimals.rows);
  } catch (error) {
    console.error(error);
  }
});


//POST - add
app.post('/animals', cors(), async (req, res) => {
  try {
    const {name} = req.body;
    const newAnimal = await db.query("INSERT INTO animals (commonname) VALUES($1) RETURNING *", [name])//placeholder
    console.log(req.body);
    res.json(newAnimal.rows[0])
  } catch (error) {
    console.error(error.message);
  }
});


/*
//POST request
app.post('/animals', cors(), async (req, res) => {
  try {
    const newAnimal = await req.body;
    const result = await db.query(
      'INSERT INTO myanimals(commonname, scientificname) VALUES($1, $2) RETURNING *',
      [newAnimal.commonname, newAnimal.scientificname]
    );
    console.log(req.body)
  } catch (error) {
    console.error(error.message);

    const newAnimal = {
      commonname: req.body.commonname,
      scientificname: req.body.scientificname,
    };
    console.log([newAnimal.commonname, newAnimal.scientificname]);

    console.log(result.rows[0]);
    res.json(result.rows[0]);
  }
});
*/

//create the PUT request
// app.put('/api/animals/:id', cors(), async (req, res) => {
//   try {
//     const updatedAnimal = await req.params.id;

//     console.log([updatedAnimal.commonname, updatedAnimal.scientificname]);

//     const result = await db.query(
//       'INSERT INTO myanimals(commonname, scientificname) VALUES($1, $2) RETURNING *',
//       [updatedAnimal.commonname, updatedAnimal.scientificname]
//     );
//   } catch (error) {
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
//   }
// });

//DELETE

//create the PUT request
// app.delete('/api/animals/:id', cors(), async (req, res) => {
//   try {
//     const delteAnimal = await req.params.id;
//   } catch (error) {
//     console.log('success');
//   }
// });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// // GET - trying to get animals by id
// app.get('/animals/id', cors(), async (req, res) => {
//   try {
//     //to send a query => db.query then the postgress
//     const results = await db.query('SELECT * FROM animals');
//     console.log(results.id);
//     // const { rows: animals } = await db.query('SELECT * FROM animals'); //table name
//     res.send(results.rows);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// //// GET - '/' create the get request
// app.get('/animals/:id', cors(), async (req, res) => {
//   try {
//     const resultById = await db.query('SELECT * FROM animals'); //table name
//     console.log(resultById.id);
//     res.send(resultById.id);
//     console.log(req.params);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

/*
//POST request
app.post('/animals', cors(), async (req, res) => {
  try {
    const newAnimal = await req.body;
    const result = await db.query(
      'INSERT INTO myanimals(commonname, scientificname) VALUES($1, $2) RETURNING *',
      [newAnimal.commonname, newAnimal.scientificname]
    );
    console.log(req.body)
  } catch (error) {
    console.error(error.message);

    const newAnimal = {
      commonname: req.body.commonname,
      scientificname: req.body.scientificname,
    };
    console.log([newAnimal.commonname, newAnimal.scientificname]);

    console.log(result.rows[0]);
    res.json(result.rows[0]);
  }
});
*/
