import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Layout as AntLayout } from "antd";

export default function Layout() {
  return (
    <AntLayout>
      <Navbar />
      <AntLayout.Content style={{ padding: "20px" }}>
        <Outlet />
      </AntLayout.Content>
    </AntLayout>
  );
}
