const { DataTypes } = require("sequelize");
const sequelize = require("../config/MySql.config");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  category: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Database schema has been automatically created or modified.");
    // Start your server or perform other application initialization here
  })
  .catch((error) => {
    console.error("An error occurred while synchronizing the database:", error);
  });

module.exports = Product;
