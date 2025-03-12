import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the Blog Platform</h1>
      <p>Read and create amazing posts!</p>
      <Button type="primary">
        <Link to="/posts">View Posts</Link>
      </Button>
    </div>
  );
}
