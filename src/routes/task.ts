import express from "express";
import {
  getAllTasks,
  deleteTaskById,
  createTask,
  getTaskById,
  updateTaskById
} from "../controller/task";


const router = express();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);

export default router;
