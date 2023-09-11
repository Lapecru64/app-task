import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Category = db.define(
    "categories",
    {
       name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  
  export default Category;
  