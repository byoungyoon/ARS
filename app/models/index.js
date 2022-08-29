const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  ...dbConfig.pool,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.algorithm = require("./algorithm.model")(sequelize, Sequelize);
db.tag = require("./tag.model")(sequelize, Sequelize);
db.algorithm_tag = require("./algorithm_tag.model")(sequelize, Sequelize);

db.algorithm.belongsToMany(db.tag, {
  through: "algorithms_tags",
  foreignKey: "algorithms_cd",
});

db.tag.belongsToMany(db.algorithm, {
  through: "algorithms_tags",
  foreignKey: "tags_cd",
});

db.algorithm_tag.belongsTo(db.algorithm, {
  foreignKey: "algorithms_cd",
});

db.algorithm_tag.belongsTo(db.tag, {
  foreignKey: "tags_cd",
});

module.exports = db;
