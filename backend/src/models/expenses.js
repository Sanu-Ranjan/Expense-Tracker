const { database } = require("../database/connection");
const { DataTypes } = require("sequelize");

const Expense = database.define("expenses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate,
    },
  },
  amount: {
    type: DataTypes.DECIMAL(30, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  isDebit: {
    type: DataTypes.ENUM("true", "false"),
    defaultValue: "true",
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  Expense,
};
