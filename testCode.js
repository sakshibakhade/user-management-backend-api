const pool = require("./db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Database error ❌", err);
  } else {
    console.log("Database connected ✅", res.rows);
  }
});
