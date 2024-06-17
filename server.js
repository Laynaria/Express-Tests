const express = require("express");
const { browse, read } = require("./controllers/wildersController");

const server = () => {
  const app = express();

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

  return app;
};

module.exports = {
  server,
};
