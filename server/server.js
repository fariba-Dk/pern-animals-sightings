const express = require('express');
const cors = require('cors');

//FOR DEVELOPMENT or FOR PRODUCTION environment variables ===Environment variables are, in short, variables that describe the environment in which apps and programs run
require('dotenv').config();
const db = require('../server/db/db-connection.js');

//creating an instance of express
const app = express();

const PORT = 5005;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/myanimals', cors(), async (req, res) => {
  //database
  // const My = [

  //     { id: 1, commonname: 'Lisa', scientificname: 'Lee', total_wild: },
  //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
  //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
  //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
  //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
  // ];
  // res.json(STUDENTS);
  try {
    const { rows: myanimals } = await db.query('SELECT * FROM animals'); //table name
    res.send(myanimals);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//create the POST request
app.post('/api/myanimals', cors(), async (req, res) => {
  const newUser = {
    commonname: req.body.firstname,
    lastname: req.body.lastname,
  };
  console.log([newUser.firstname, newUser.lastname]);
  const result = await db.query(
    'INSERT INTO myanimals(firstname, lastname) VALUES($1, $2) RETURNING *',
    [newUser.firstname, newUser.lastname]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
