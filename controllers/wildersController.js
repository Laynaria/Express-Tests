const { data } = require("../data.json");

const browse = (_, res) => {
  res.send(data);
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const wilder = data.filter((wilder) => (wilder.id === id ? wilder : null))[0];

  if (wilder !== undefined) {
    return res.send(wilder);
  }

  return res.status(404).json({ Error: "This wilder doesn't exist." });
};

module.exports = {
  browse,
  read,
};
