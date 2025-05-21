import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import SpinningIcon from "components/Icons/SpinningIcon";
import { useState } from "react";
import { Link } from "react-router";

export default function RegisterForm() {


  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center">
      <div className="flex flex-col items-center">

        <div className="text-center bg-gray-800 flex flex-col items-center justify-center pb-6 px-6 shadow-2xl rounded-b-md">
          <form className="w-full max-w-sm space-y-4">
            <h1 className="p-4 mt-2 text-2xl font-light">Create an Account</h1>

            <div className="flex flex-col">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={''}
                className="p-2 w-[350px] text-sm focus:outline-none text-white bg-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={''}
                className="p-2 w-[350px] text-sm focus:outline-none text-white bg-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={''}
                className="p-2 w-[350px] text-sm focus:outline-none text-white bg-gray-700"
              />
            </div>

            <div className="flex flex-col relative">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={''}
                className="p-2 w-[350px] text-sm focus:outline-none text-white bg-gray-700 pr-12"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {passwordVisible ? (
                  <EyeSlashIcon className="size-5" />
                ) : (
                  <EyeIcon className="size-5" />
                )}
              </button>
            </div>

            <div className="flex flex-col">
              <input
                name="confirmPassword"
                type={passwordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                value={''}
                className="p-2 w-[350px] text-sm focus:outline-none text-white bg-gray-700"
              />
            </div>

            <p className="text-xs text-left text-gray-400 w-[350px]">
              Use a strong password with a mix of letters, numbers, and symbols.
            </p>

            <div className="flex items-center text-left w-[350px] space-x-4">
              <div className="flex items-center">
                <input
                  id="account-user"
                  name="accountType"
                  type="radio"
                  value="user"
                  defaultChecked
                  className="mr-2 h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="account-user" className="text-sm text-gray-300">
                  User Account
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="account-admin"
                  name="accountType"
                  type="radio"
                  value="admin"
                  className="mr-2 h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="account-admin" className="text-sm text-gray-300">
                  Administrator Account
                </label>
              </div>
            </div>


            <button
              type="submit"
              className={`text-xs bg-gray-600 text-white py-2 max-h-8 w-full mt-4 flex justify-center items-center 
                ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700 transition-all"}`}
              disabled={loading}
            >
              {loading ? <SpinningIcon className="text-white" /> : <p>REGISTER</p>}
            </button>

            <div className="flex justify-center items-center">
              <p className="text-sm text-gray-300">Already have an account?</p>
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
