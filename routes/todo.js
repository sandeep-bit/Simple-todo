const express = require("express");

const {
  createTodo,
  getTodos,
  getTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.route("/").post(createTodo);
router.route("/").get(getTodos);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
