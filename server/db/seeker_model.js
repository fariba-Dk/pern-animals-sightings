//importing the pg library BUT we are destructuring and
//get an instance of pool

const Pool = require('pg').Pool;
const pool = new Pool({
  connectionString: process.env.DB_URI,
});
module.export = db;
