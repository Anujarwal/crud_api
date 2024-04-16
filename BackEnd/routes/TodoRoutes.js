const express = require("express");
const {
  getTodo,
  getAbout,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../Controller/TodoController");

const routes = express.Router();

routes.get("/", getTodo);
routes.get("/about", getAbout);
routes.post("/", createTodo);
routes.delete("/", deleteTodo);
routes.put("/", updateTodo);

module.exports = routes;
