module.exports = {
  HOST: "localhost",
  USER: "byoungyoon",
  PASSWORD: "java1004",
  DB: "ars",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
