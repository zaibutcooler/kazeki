"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Link href="/" className="fixed left-0 top-0 font-bold p-4">
        <AiOutlineArrowLeft />
      </Link>
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md mx-3">
        <div className="text-2xl font-semibold mb-6 text-center">Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block  text-gray-700 text-sm font-bold mb-2">
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
          <div className="mb-4">
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
              className="w-full border border-gray-200 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full border border-gray-200 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-opacity-50">
              Sign Up
            </button>
            <Link
              href="/auth/login"
              className="text-gray-800 text-sm font-semibold">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
