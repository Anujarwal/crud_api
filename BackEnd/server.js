const express = require("express");
const connectDB = require("./config/db_config");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// root directory

connectDB()

app.use("/api/todo", require("./routes/TodoRoutes"));

app.listen(PORT, () => {
  console.log(`server is ready ${PORT}`);
});
