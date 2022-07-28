module.exports = (sequelize, Sequelize) => {
  const Algorithms = sequelize.define("algorithms", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [2, 20],
      },
      set(value) {
        this.setDataValue("title", value.trim());
      },
    },
    scope: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 5,
      },
    },
  });

  return Algorithms;
};
