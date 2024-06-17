const express = require("express");

const app = express();
const port = 8000;

const data = require("./data.json");

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.get("/wilders", (_, res) => {
  res.send(data.data);
});

app.get("/wilders/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  const wilder = data.data.filter((wilder) =>
    wilder.id === id ? wilder : null
  );
  res.send(wilder);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
