const { Profile } = require("./Profiles");
const { Account } = require("./accounts");
const { Expense } = require("./expenses");
const { ToDo } = require("./todos");
const { User } = require("./users");

User.hasMany(Profile);
Profile.belongsTo(User);

Profile.hasMany(Account);
Account.belongsTo(Profile);

User.hasMany(Account);
Account.belongsTo(User);

User.hasMany(ToDo);
ToDo.belongsTo(User);

Profile.hasMany(ToDo);
ToDo.belongsTo(Profile);

User.hasMany(Expense);
Profile.hasMany(Expense);
Account.hasMany(Expense);
Expense.belongsTo(User);
Expense.belongsTo(Profile);
Expense.belongsTo(Account);

module.exports = {
  Profile,
  Account,
  Expense,
  ToDo,
  User,
};
