module.exports = (app) => {
  const algorithms = require("../controllers/algorithms.controller");
  let router = require("express").Router();

  router.post("/", algorithms.create);
  router.get("/", algorithms.findAll);
  router.get("/:id", algorithms.findOne);
  router.put("/:id", algorithms.update);
  router.delete("/:id", algorithms.delete);

  app.use("/api/algorithms", router);
};
