import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && email) {
      dispatch(login({ username, email }));
      navigate("/");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </form>

        {/* Not Registered Button */}
        <button
          onClick={() => navigate("/register")}
          className="mt-4 text-blue-500 underline block text-center"
        >
          Not registered?
        </button>
      </div>
    </div>
  );
};

export default Login;
