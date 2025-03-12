import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import Article from "../pages/ArticleDetail";
//import PrivateRoute from "../hoc/PrivateRoute";
import Header from "../components/Header"; // ✅ Import Header
import PrivateRoute from "../components/PrivateRoute";

const AppRouter = () => {
  return (
    <div>
      <Header /> {/* ✅ Always show Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:id" element={<PrivateRoute><Article /></PrivateRoute>} />
      </Routes>
    </div>
  );
};

export default AppRouter;
