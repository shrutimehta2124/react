import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">My Blog</Link>
      <nav>
        {isAuthenticated ? (
          <button onClick={() => dispatch(logout())} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        ) : (
          <Link to="/login" className="bg-green-500 px-3 py-1 rounded">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
