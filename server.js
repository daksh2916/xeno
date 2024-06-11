const express = require("express");
const dbConnect = require("./config/app");
const routes = require("./routers/reoutes");

const app = express();
require('dotenv').config(); 

const PORT = process.env.PORT|| 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>chala hai</h1>`);
});

app.use("/v1/api",routes);



// Connect to the database
dbConnect();

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));