import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "@remix-run/react";
import { useState } from "react";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  const navigate = useNavigate();

  return (
    <div className="text-center bg-gray-800 flex flex-col items-center justify-center pb-6 px-6 shadow-2xl">
      <form className="w-full max-w-sm space-y-4">
        <h1 className="p-4 mt-2 text-2xl font-light">Network Login</h1>
        <div className="flex flex-col">
          <input
            id="username"
            type="text"
            className="p-2 w-[350px] text-sm focus:outline-none focus:ring-0 text-white bg-gray-700"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col relative">
          <input
            id="password"
            type={passwordVisible ? "text" : "password"}
            className="p-2 w-[350px] text-sm focus:outline-none focus:ring-0 text-white bg-gray-700 pr-12"
            placeholder="Password"/>

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            {passwordVisible ? (
              <EyeSlashIcon className="size-5" />
            ) : (
              <EyeIcon className="size-5" />
            )}
          </button>
        </div>

        <div className="flex justify-between items-center pt-5">
          <div>
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-300">
              Remember Me
            </label>
          </div>
          <div className="text-right">
            <Link to="/login" className="text-blue-500 hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>
        </div>

        <Link
          to=""
          onClick={handleLogin}
          className="text-xs bg-gray-600 text-white py-2 max-h-8 w-full hover:bg-gray-700 mt-4 flex justify-center items-center">
          {loading ? (
            <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25"/>
              <path fill="none" strokeWidth="4" d="M4 12a8 8 0 0 1 8-8V4a10 10 0 0 0-10 10h2z" className="opacity-75"/>
            </svg>
          ) : (
            "LOGIN"
          )}
        </Link>

        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-300">{`Don't have an account? `}</p>
          <Link to="/login" className="text-blue-500 hover:underline text-sm ml-1">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
