import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreatePost() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: { title: string; body: string }) => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => navigate("/posts"))
      .finally(() => setLoading(false));
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please enter a title" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Body" name="body" rules={[{ required: true, message: "Please enter the body" }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading}>
        Create Post
      </Button>
    </Form>
  );
}
