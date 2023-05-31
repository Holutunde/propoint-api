// const mongoose = require('mongoose')

// const connectDB = (url) => {
//   return mongoose
//     .connect(url)
//     .then(console.log('connected to database'))
//     .catch((err) => console.log(err))
// }

// module.exports = connectDB

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "propoint",
  password: "12345",
  port: 5432,
  host: "localhost",
});

module.exports = pool;
