"use client";

import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <div className="text-2xl font-semibold mb-6 text-center">Login</div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-200 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-opacity-50">
              Login
            </button>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-500 text-sm font-semibold">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
