const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Sakshi@18",
  database: "userdb",
  port: 5432,
});

module.exports = pool;
