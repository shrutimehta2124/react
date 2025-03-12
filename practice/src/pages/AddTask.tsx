import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "antd";
import useTasks from "../hooks/useTasks";
import useFormValidation from "../hooks/useFormValidation";

const { Title } = Typography;

const AddTask: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask } = useTasks();
  const { error, validate } = useFormValidation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (validate(taskTitle)) {
      addTask(taskTitle);
      navigate("/");
    }
  };

  return (
    <div>
      <Title>Add New Task</Title>
      <Input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Task Title" />
      <Button type="primary" onClick={handleSubmit}>Add Task</Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddTask;
