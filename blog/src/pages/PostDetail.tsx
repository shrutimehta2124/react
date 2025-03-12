import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Post } from "../types/post";
import { Button, Spin } from "antd";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, loading } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <Spin size="large" />;
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Button type="primary" onClick={() => navigate(`/posts/${id}/edit`)}>
        Edit Post
      </Button>
    </div>
  );
}
