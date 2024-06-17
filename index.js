const express = require("express");
const { browse, read } = require("./controllers/wildersController");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.get("/wilders", (_, res) => {
  browse(_, res);
});

app.get("/wilders/:id", (req, res) => {
  read(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
