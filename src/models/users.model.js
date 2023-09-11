import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import Task from "./tasks.model.js";

const User = db.define(
  "users",
  {
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Task);
Task.belongsTo(User);

export default User;

  