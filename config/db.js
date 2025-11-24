const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Set to console.log to see SQL queries
    define: {
      timestamps: false,
      freezeTableName: true,
      underscored: false,
    },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected via Sequelize");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();
module.exports = sequelize;
