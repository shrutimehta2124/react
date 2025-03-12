import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { FaNewspaper } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((state: any) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="bg-blue-600 text-white flex justify-between items-center p-4 shadow-lg">
      {/* Logo & Title */}
      <div className="flex items-center gap-2">
        <FaNewspaper className="text-2xl" />
        <h1 className="text-xl font-bold">News Articles</h1>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm">Hello, {user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
