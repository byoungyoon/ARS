module.exports = (sequelize, Sequelize) => {
  const Tag = sequelize.define("tags", {
    cd: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cd_nm: {
      type: Sequelize.STRING,
    },
  });

  return Tag;
};
