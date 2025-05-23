import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "@remix-run/react";
import SpinningIcon from "components/Icons/SpinningIcon";
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
      navigate("/login")
    }, 2000);
  };

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center">
      <div className="text-center bg-gray-800 flex flex-col items-center justify-center pb-6 px-6 shadow-2xl">
        <form className="w-full max-w-sm space-y-4">
          <h1 className="p-4 mt-2 text-2xl font-light">Network Login</h1>
          <div className="flex flex-col">
            <input id="username" type="text" placeholder="Username" value={username}
              className="p-2 w-[350px] text-sm focus:outline-none focus:ring-0 text-white bg-gray-700"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col relative">
            <input id="password" type={passwordVisible ? "text" : "password"} placeholder="Password"
              className="p-2 w-[350px] text-sm focus:outline-none focus:ring-0 text-white bg-gray-700 pr-12"/>

            <button
              type="button" onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              {passwordVisible ? ( <EyeSlashIcon className="size-5" /> ) : ( <EyeIcon className="size-5" /> )}
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
            to="/feedback"
            onClick={handleLogin}
            className={`text-xs bg-gray-600 text-white py-2 max-h-8 w-full mt-4 flex justify-center items-center 
            ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700 transition-all"}`}>
            {loading ? ( <SpinningIcon className="text-white" /> ) : ( <p>LOGIN</p> )}
          </Link>

          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-300">{`Don't have an account? `}</p>
            <Link to="/login" className="text-blue-500 hover:underline text-sm ml-1">
              Register
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
