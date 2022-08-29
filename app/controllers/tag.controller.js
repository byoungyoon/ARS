const db = require("../models");
const Tag = db.tag;

exports.findAll = (req, res) => {
  Tag.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred whild retrieving tag",
      });
    });
};
