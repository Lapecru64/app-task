import { Router } from "express";
import {
  createUser,
  createTask,
  getUserTasksWithCategories,
  updateTaskCompleted,
  deleteTask,
  createCategory,
} from "./controllers.js";

const router = Router();

router.route("/users").post(createUser);
router.route("/tasks").post(createTask);
router.route("/users/:userId/tasks").get(getUserTasksWithCategories);
router.route("/tasks/:taskId/completed").put(updateTaskCompleted);
router.route("/tasks/:taskId").delete(deleteTask);
router.route("/categories").post(createCategory);

export default router;
