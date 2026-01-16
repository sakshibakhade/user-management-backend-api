const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes"); // ✅ path check

app.use(express.json()); // ✅ middleware

// ✅ THIS LINE IS CRITICAL
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
