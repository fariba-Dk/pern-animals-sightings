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
    const { animal } = req.body;

    const newAnimal = await db.query(
      //   //prepair statement
      'INSERT INTO animals (commonname,scientificname) VALUES($1, $2) RETURNING *',
      ['aaaa', 'bbbb']
    );
    // ); //placeholder
    console.log('this is the request body ', req.body);
    console.log('this is the new---->', newAnimal);
    res.json({ say: 'hi' });
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
app.delete('/animals/:id', async (req, res) => {
  try {
    const { id } = await req.params;
    const deleteAnimal = await db.query(
      'DELETE * FROM animals WHERE animal_id = $1',
      [id]
    );
    res.json('animal deleted');
  } catch (error) {
    console.error(error);
  }
});

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
