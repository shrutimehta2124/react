import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "create", element: <CreatePost /> },
    ],
    errorElement: <NotFound />, // Handling 404 Pages
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
