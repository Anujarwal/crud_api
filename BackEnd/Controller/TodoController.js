const Todos = require("../models/TodoModels");

const getTodo = async (req, res) => {
  const todos = await Todos.find();

  if (!todos) {
    res.json({ message: "No Todo found" });
  }
  res.json({ todos });
};

const getAbout = async (req, res) => {
  const todos = await Todos.findById();

  if (!todos) {
    res.json({ message: "No Todo found" });
  }
  res.json({ todos });
};

const createTodo = async (req, res) => {
  const createTodo = await Todos.post(req.body);
  res.json({ createTodo });
};

const deleteTodo = async (req, res) => {
  const deleteTodo = await Todos.findByIdAndDelete(req.params.id);
  res.json({ deleteTodo });
};

const updateTodo = async (req, res) => {
  const updateTodo = await Todos.findByIdAndUpdate(req.params.id, req.body);
  res.json({ updateTodo });
};

module.exports = { getTodo, getAbout, createTodo, deleteTodo, updateTodo };
