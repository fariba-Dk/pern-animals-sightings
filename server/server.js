const express = require('express');
const cors = require('cors');

//FOR DEVELOPMENT or FOR PRODUCTION environment variables ===Environment variables are, in short, variables that describe the environment in which apps and programs run

require('dotenv').config();

// const db = require('../server/db/db-connection.js');
const db = require('./db/db-connection');

//creating an instance of express
const app = express();

//if this env val is defined we set port to that value : else => 5005

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json()); //req.body

//GET -
app.get('/', (req, res) => {
  console.log('this is get--->');
});
app.get('/animals/', async (req, res, next) => {
  try {
    const allAnimals = await db.query('SELECT * FROM animals');
    console.log(allAnimals.rows);
    res.json(allAnimals.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get('/users/', async (req, res, next) => {
  // console.log(req);
  try {
    const allUsers = await db.query('SELECT * FROM users');
    console.log(allUsers.rows);
    res.json(allUsers.rows);
  } catch (error) {
    console.error(error);
  }
});
//CREATE A SEEKER
// const createSeeker = (body) => {
//   return new Promise(function (resolve, reject) {
//     const { name, nick_name, email } = body;
//     pool.query(
//       'INSERT INTO seekers (name, nick_name, email) VALUES ($1, $2, $3) RETURNING *',
//       [name, nick_name, email],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(`A new seeker has been added added: ${results.rows[0]}`);
//       }
//     );
//   });
// };
// // POST - ROUTE - SEEKER
// app.post('/seekers', (req, res) => {
//   connectionString
//     .createSeeker(req.body)
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

// //POST ROUTE ANIMALS
// app.post('/animals', cors(), async (req, res) => {
//   try {
//     const newAnimal = await req.body;
//     const result = await db.query(
//       'INSERT INTO myanimals(commonname, scientificname) VALUES($1, $2) RETURNING *',
//       [newAnimal.commonname, newAnimal.scientificname]
//     );
//     console.log(req.body);
//   } catch (error) {
//     console.error(error.message);

//     const newAnimal = {
//       commonname: req.body.commonname,
//       scientificname: req.body.scientificname,
//     };
//     console.log([newAnimal.commonname, newAnimal.scientificname]);

//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
//   }
// });

// const getSeekers = () => {
//   return new Promise(function (resolve, reject) {
//     pool.query('SELECT * FROM seekers ORDER BY id ASC', (error, results) => {
//       if (error) {
//         reject(error);
//       }
//       resolve(results.rows);
//     });
//   });
// };

// const deleteSeeker = () => {
//   return new Promise(function (resolve, reject) {
//     const id = parseInt(request.params.id);
//     pool.query('DELETE FROM seeker WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         reject(error);
//       }
//       resolve(`Seeker deleted with ID: ${id}`);
//     });
//   });
// };

// // app.delete('/seeker/:id', (req, res) => {
// //   db-connection.js
// //     .deleteSeeker(req.params.id)
// //     .then((response) => {
// //       res.status(200).send(response);
// //     })
// //     .catch((error) => {
// //       res.status(500).send(error);
// //     });
// // });

// module.exports = {
//   getSeekers,
//   createSeeker,
//   deleteSeeker,
// };
//POST - add
// app.post('/animals', cors(), async (req, res) => {
//   try {
//     const { animal } = req.body;
//     console.log(animal)

//     const newAnimal = await db.query(

//       'INSERT INTO myanimals (commonname,scientificname) VALUES($1, $2) RETURNING *',
//       [animal]
//     );
//     // ); //placeholder
//     console.log('this is the request body ', req.body);
//     console.log('this is the new---->', newAnimal);
//     res.json({ say: 'hi' });
//   } catch (error) {
//     console.error(error.message);
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
// app.delete('/animals/:id', async (req, res) => {
//   try {
//     const { id } = await req.params;
//     const deleteAnimal = await db.query(
//       'DELETE * FROM animals WHERE animal_id = $1',
//       [id]
//     );
//     res.json('animal deleted');
//   } catch (error) {
//     console.error(error);
//   }
// });

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
