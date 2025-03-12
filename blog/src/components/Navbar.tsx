import { NavLink } from "react-router-dom";
import { Menu } from "antd";

export default function Navbar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="posts">
        <NavLink to="/posts">Posts</NavLink>
      </Menu.Item>
      <Menu.Item key="create">
        <NavLink to="/create">Create Post</NavLink>
      </Menu.Item>
    </Menu>
  );
}
