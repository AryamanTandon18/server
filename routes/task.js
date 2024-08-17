
import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
  editTask
} from "../controllers/task.js";
import { isAuthenticated } from "../middleWares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/my", isAuthenticated, getMyTask);
router.post("/editTask/:id",isAuthenticated,editTask);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;

