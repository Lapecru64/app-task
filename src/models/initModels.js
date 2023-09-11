
import User from "./users.model.js";
import Category from "./categories.model.js";
import Task from "./tasks.model.js";

const initModels = () => {
  // Relación entre Users y Categories
  User.hasMany(Category);
  Category.belongsTo(User);

  // Relación entre Categories y Tasks
  Category.hasMany(Task);
  Task.belongsTo(Category);
};

export default initModels;

