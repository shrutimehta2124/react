import { Form, Input, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Post } from "../types/post";
import { useState } from "react";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, loading } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [updating, setUpdating] = useState(false);

  const onFinish = (values: { title: string; body: string }) => {
    setUpdating(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => navigate("/posts"))
      .finally(() => setUpdating(false));
  };

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <Form onFinish={onFinish} layout="vertical" initialValues={{ title: post.title, body: post.body }}>
      <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please enter a title" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Body" name="body" rules={[{ required: true, message: "Please enter the body" }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={updating}>
        Update Post
      </Button>
    </Form>
  );
}
