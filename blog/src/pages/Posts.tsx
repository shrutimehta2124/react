import { Table, Spin } from "antd";
import { useFetch } from "../hooks/useFetch";
import { Post } from "../types/post";
import { Link } from "react-router-dom";

export default function Posts() {
  const { data: posts, loading } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <Spin size="large" />;

  if (!posts || posts.length === 0) return <p>No posts found</p>;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string, record: Post) => <Link to={`/posts/${record.id}`}>{text}</Link>,
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
  ];

  return <Table dataSource={posts} columns={columns} rowKey="id" />;
}
