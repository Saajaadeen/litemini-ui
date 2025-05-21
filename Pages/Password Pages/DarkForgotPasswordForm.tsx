import { useState } from "react";
import { Link } from "react-router";
import SpinningIcon from "components/Icons/SpinningIcon";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center">
      <div className="flex flex-col items-center">

        <div className="text-center bg-gray-800 flex flex-col items-center justify-center pb-6 px-6 shadow-2xl rounded-b-md">
          <form className="w-full max-w-sm space-y-4">
            <h1 className="p-4 mt-2 text-2xl font-light">Forgot Password</h1>

            <div className="flex flex-col">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                className="p-2 w-[350px] text-sm focus:outline-none focus:ring-0 text-white bg-gray-700"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={`text-xs bg-gray-600 text-white py-2 max-h-8 w-full mt-4 flex justify-center items-center ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700 transition-all"
              }`}
              disabled={loading}
            >
              {loading ? <SpinningIcon className="text-white" /> : <p>SEND RESET LINK</p>}
            </button>

            <div className="flex justify-center items-center">
              <p className="text-sm text-gray-300">Remembered your password? </p>
              <Link to="/login" className="text-blue-500 hover:underline text-sm ml-1">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordForm;
