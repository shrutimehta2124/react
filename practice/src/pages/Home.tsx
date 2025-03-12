import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, Button, Select, Typography } from "antd";
import useTasks from "../hooks/useTasks";

const { Title } = Typography;

const Home: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const { tasks, toggleComplete, deleteTask } = useTasks();

  const filteredTasks = tasks.filter(
    (task) => filter === "all" || (filter === "completed" ? task.completed : !task.completed)
  );

  return (
    <div>
      <Title>Task Manager</Title>
      <Select value={filter} onChange={(value) => setFilter(value)} style={{ width: 150, marginBottom: 20 }}>
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="completed">Completed</Select.Option>
        <Select.Option value="pending">Pending</Select.Option>
      </Select>

      <List
        bordered
        dataSource={filteredTasks}
        renderItem={(task) => (
          <List.Item>
            <span
              onClick={() => toggleComplete(task.id)}
              style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {task.title}
            </span>
            <Button onClick={() => deleteTask(task.id)} danger>Delete</Button>
            <Link to={`/edit/${task.id}`}>Edit</Link>
          </List.Item>
        )}
      />
      <Link to="/add">
        <Button type="primary">Add New Task</Button>
      </Link>
    </div>
  );
};

export default Home;
