module.exports = (sequelize, Sequelize) => {
  const Algorithm = sequelize.define("algorithms", {
    cd: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
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

  return Algorithm;
};
