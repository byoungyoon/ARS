module.exports = (app) => {
  const tag = require("../controllers/tag.controller");
  let router = require("express").Router();

  router.get("/", tag.findAll);

  app.use("/api/tag", router);
};
