import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "antd";
import useTasks from "../hooks/useTasks";
import useFormValidation from "../hooks/useFormValidation";

const { Title } = Typography;

const EditTask: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const { tasks, editTask } = useTasks();
  const { error, validate } = useFormValidation();
  const [taskTitle, setTaskTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const task = tasks.find((task) => task.id === parseInt(taskId || ""));
    if (task) {
      setTaskTitle(task.title);
    } else {
      navigate("/error");
    }
  }, [taskId, tasks, navigate]);

  const handleSubmit = () => {
    if (validate(taskTitle)) {
      editTask(parseInt(taskId || ""), taskTitle);
      navigate("/");
    }
  };

  return (
    <div>
      <Title>Edit Task</Title>
      <Input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      <Button type="primary" onClick={handleSubmit}>Save Changes</Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EditTask;
