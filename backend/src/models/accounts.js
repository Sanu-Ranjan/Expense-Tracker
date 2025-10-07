const { database } = require("../database/connection");
const { DataTypes } = require("sequelize");

const Account = database.define("accounts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bankDetails: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  openingBalance: {
    type: DataTypes.DECIMAL(30, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
});

module.exports = {
  Account,
};
