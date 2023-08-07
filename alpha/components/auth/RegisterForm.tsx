"use client";
import { UserType } from "@/database/User";
import { setUser } from "@/store/userSlice";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== password2) {
      return;
    }
    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        const data: UserType = await response.json();
        // dispatch(setUser(data._id));
        localStorage.setItem("userID", data._id);
        console.log("success user :", data._id);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Link href="/" className="fixed left-0 top-0 font-bold p-4">
        <AiOutlineArrowLeft />
      </Link>
      {error && <div className="w-full text-center">{error}</div>}
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
