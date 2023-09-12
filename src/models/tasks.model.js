import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import Category from "./categories.model.js";

const Task = db.define(
  "tasks",
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
  },
  {
    timestamps: false,
  }
);

export default Task;
