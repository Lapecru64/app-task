import User from "../models/users.model.js";
import Category from "../models/categories.model.js";
import Task from "../models/tasks.model.js";

// Controlador para crear un usuario
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const [user, created] = await User.findOrCreate({ 
      where: { email: email }, 
      defaults: { username, email, password }, 
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "No se pudo crear el usuario" });
  }
};

// Controlador para crear una tarea
const createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const [ task, created] = await Task.findOrCreate({ 
      where: { title: title }, 
      defaults: { title, description, completed }, 
    });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "No se pudo crear la tarea" });
  }
};

// Controlador para obtener todas las tareas de un usuario incluyendo sus categorías
const getUserTasksWithCategories = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Task,
          attributes: ["title", "description", "completed"],
          include: { model: Category, attributes: ["name"] },
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user.tasks);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "No se pudieron obtener las tareas del usuario" });
  }
};

// Controlador para cambiar el atributo completed de una tarea
const updateTaskCompleted = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    task.completed = !task.completed;
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "No se pudo actualizar la tarea" });
  }
};

// Controlador para eliminar una tarea
const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    await task.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "No se pudo eliminar la tarea" });
  }
};

// Controlador para crear una categoría
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const [category, created] = await Category.findOrCreate({ 
      where: { name: name }, 
      defaults: { name, description }, 
    });
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "No se pudo crear la categoría" });
  }
};

    
export {
  createUser,
  createTask,
  getUserTasksWithCategories,
  updateTaskCompleted,
  deleteTask,
  createCategory,
};
