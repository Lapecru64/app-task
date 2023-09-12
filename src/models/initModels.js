
import User from "./users.model.js";
import Category from "./categories.model.js";
import Task from "./tasks.model.js";

const initModels = () => {

  // Relación entre Users y Categories
  //User tiene muchas categories
  //Category tiene muchos Users
  User.hasMany(Category);
  Category.belongsTo(User);

  // Relación entre Categories y Tasks
  //1 task pertenece a 1 Category
  Task.belongsTo(Category, { foreignKey: "categoryId" });
  //1 Category tiene muchas Tasks
  Category.hasMany(Task, { foreignKey: "categoryId" })

  // Un User tiene muchas Categories
  User.belongsToMany(Category, {through: 'UsersCategories'});
  // Una Category la pueden tener muchos Users
  Category.belongsToMany(User, { through: 'UsersCategories' });
};

export default initModels;

