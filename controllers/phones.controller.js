const { response, request } = require("express");

const phonesGet = (req = request, res = response) => {
  const { q, name = "no name", apiKey, page = 1, limit } = req.query;
  res.json({
    msg: "get API _ controller",
    q,
    name,
    apiKey,
    page,
    limit,
  });
};

const phonesPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put API _ controller",
    id,
  });
};

const phonesPost = (req, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: "post API _ controller",
    name,
    age,
  });
};

const phonesDelete = (req, res = response) => {
  res.json({
    msg: "delete API _ controller",
  });
};

const phonesPatch = (req, res = response) => {
  res.json({
    msg: "patch API _ controller",
  });
};

module.exports = {
  phonesGet,
  phonesPut,
  phonesPost,
  phonesDelete,
  phonesPatch,
};
