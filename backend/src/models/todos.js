const { database } = require("../database/connection");
const { DataTypes } = require("sequelize");

const toDo = database.define("toDos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate,
    },
  },
});

module.exports = {
  toDo,
};
