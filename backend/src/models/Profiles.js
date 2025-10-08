const { database } = require("../database/connection");
const { DataTypes } = require("sequelize");

const Profile = database.define(
  "profiles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePurpose: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    additionalInfo: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  Profile,
};
