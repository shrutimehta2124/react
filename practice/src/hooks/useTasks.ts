import { useState, useEffect } from "react";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const editTask = (id: number, newTitle: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return { tasks, addTask, editTask, deleteTask, toggleComplete };
};

export default useTasks;
