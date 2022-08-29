const db = require("../models");
const Algorithm = db.algorithm;
const Tag = db.tag;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const algorithm = {
    title: req.body.title,
    scope: req.body.scope,
  };

  Algorithm.create(algorithm)
    .then((data) => {
      res.send(data);
    })
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the algorithms",
      })
    );
};

exports.findAll = (req, res) => {
  const limit = 12;
  const pagination = {
    limit: limit * req.query.page,
    offset: 0,
  };

  const cd = Number(req.query.cd);

  Algorithm.findAll({
    include: [
      {
        model: Tag,
        through: { attributes: [] },
        attributes: ["cd", "cd_nm"],
        where: cd !== 0 && {
          cd: cd,
        },
      },
    ],
    order: [
      ["updatedAt", "DESC"],
      [Tag, "cd_nm", "DESC"],
    ],
    ...pagination,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving algorithms",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Algorithm.findOne({ where: { id: id } })
    .then((data) => {
      if (!data)
        res.status(400).send({ message: "Not found algorithms with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving algorithms with id " + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty",
    });
  }

  const id = req.params.id;
  Algorithm.update(req.body, { where: { id: id }, useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Cannot update algorithms with id ${id}, Maybe algorithms was not found`,
        });
      } else res.send({ message: "Algorithms was updated successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error update algorithms with id " + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Algorithm.destroy({ where: { id: id } })
    .then((data) => {
      if (!data) {
        res.send(400).send({
          message: `Cannot delete algorithms with id ${id}, Maybe algorithms was not found`,
        });
      } else res.send({ message: "Algorithms was deleted successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete algorithms with id " + id,
      });
    });
};
