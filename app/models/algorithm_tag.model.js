module.exports = (sequelize, Sequelize) => {
  const Relative = sequelize.define(
    "algorithms_tags",
    {
      algorithms_cd: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      tags_cd: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Relative;
};
