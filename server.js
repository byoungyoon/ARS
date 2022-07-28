const express = require("express");
const app = express();
const db = require("./app/models");

app.use(express.json()).use(express.urlencoded({ extended: true }));

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db");
// });
require("./app/routes/algorithms.route")(app);

const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
