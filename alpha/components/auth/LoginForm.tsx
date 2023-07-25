"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Link href="/" className="fixed left-0 top-0 font-bold p-4">
        <AiOutlineArrowLeft />
      </Link>
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md mx-3">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-opacity-50">
              Login
            </button>
            <Link
              href="#"
              className="text-gray-800 hover:text-gray-500 text-sm font-semibold">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
