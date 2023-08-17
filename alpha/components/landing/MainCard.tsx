"use client";

import { ProfileType } from "@/database/UserProfile";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaBriefcase, FaSearchDollar } from "react-icons/fa";

const MainCard = () => {
  const [selectedOne, setSelectedOne] = useState("client");
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;

  const displayContent = () => {
    switch (selectedOne) {
      case "client":
        return (
          <>
            <h1 className="pt-2 text-3xl md:text-4xl font-bold mb-3">
              The best place to find your future employees
            </h1>
            <p className="text-[0.7rem]  mb-6 text-gray-600">
              Recruit fast and efficently only in 10 days effectively and
              efficently
            </p>
            <div className="mb-6">
              {session?.user ? (
                <Link
                  href="/home"
                  className="px-4 py-3 border rounded-md text-sm font-semibold bg-gray-900 text-white hover:bg-gray-700">
                  Head to Home
                </Link>
              ) : (
                <Link
                  href="/auth/register"
                  className="px-4 py-3 border rounded-md text-sm font-semibold bg-gray-900 text-white hover:bg-gray-700">
                  Sign up and recruit
                </Link>
              )}
            </div>
            <p className="text-xs text-gray-500">
              <span className="mr-2">
                {session?.user
                  ? `You are already logged in as ${profile.firstName}`
                  : "Already created a client account?"}
              </span>
              {session?.user ? (
                <button onClick={() => signOut()} className="text-black">
                  Sign out
                </button>
              ) : (
                <Link href="/auth/login" className="text-black">
                  Sign in
                </Link>
              )}
            </p>
          </>
        );
      case "seeker":
        return (
          <>
            <h1 className="pt-2 text-3xl md:text-4xl font-bold mb-3">
              Unlock your door full of opportunities
            </h1>
            <p className="text-[0.7rem]  mb-6 text-gray-600">
              Experience a seamless journey to explore, apply, and secure your
              ideal job
            </p>
            <div className="mb-6 flex">
              {session?.user ? (
                <Link
                  href="/home"
                  className="px-4 py-3 border rounded-md text-sm font-semibold bg-gray-900 text-white mr-6  hover:bg-gray-700">
                  Head To home
                </Link>
              ) : (
                <Link
                  href="/auth/register"
                  className="px-4 py-3 border rounded-md text-sm font-semibold bg-gray-900 text-white mr-6  hover:bg-gray-700">
                  Create Account
                </Link>
              )}

              <Link
                href="/home/job-seeking"
                className="px-4 py-3 border rounded-md text-sm font-semibold bg-gray-200 text-gray-800 mr-6 hover:bg-gray-300">
                Job Listing
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              <span className="mr-2">
                {session?.user
                  ? `You are already signed in as ${profile.firstName}`
                  : "Already created a client account?"}
              </span>
              {session?.user ? (
                <button onClick={() => signOut()} className="text-black">
                  Sign out
                </button>
              ) : (
                <Link href="/auth/login" className="text-black">
                  Sign in
                </Link>
              )}
            </p>
          </>
        );
      case "freelancer":
        return (
          <>
            <h1 className="pt-2 text-3xl md:text-4xl font-bold mb-3">
              Show off your skills and get paid
            </h1>
            <p className="text-[0.7rem]  mb-6 text-gray-600">
              Unlock a world of rewarding opportunities for your unique skills
              and talents.
            </p>
            <div className="mb-6 flex">
              {session?.user ? (
                <Link
                  href="/home"
                  className="px-4 py-3 border rounded-md text-sm font-semibold bg-gray-900 text-white mr-6  hover:bg-gray-700">
                  Head to Home
                </Link>
              ) : (
                <Link
                  href="/auth/register"
                  className="px-4 py-3 border rounded-md text-sm font-semibold bg-gray-900 text-white mr-6  hover:bg-gray-700">
                  Sign Up and Explore
                </Link>
              )}

              <Link
                href="/home/freelance"
                className="px-4 py-3 border rounded-md text-sm font-semibold bg-gray-200 text-gray-800 mr-6 hover:bg-gray-300">
                Explore
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              <span className="mr-2">
                {session?.user
                  ? `You are already logged in as ${profile.firstName}`
                  : "Already created a client account?"}
              </span>
              {session?.user ? (
                <button onClick={() => signOut()} className="text-black">
                  Sign out
                </button>
              ) : (
                <Link href="/auth/login" className="text-black">
                  Sign in
                </Link>
              )}
            </p>
          </>
        );
    }
  };

  return (
    <main className="w-[450px] h-[460px] border border-slate-300">
      <div className="h-1/4 w-full  flex items-center font-semibold text-sm">
        <section
          className={`w-1/3 flex justify-center h-full pt-2 ${
            selectedOne === "client" && "border-b-8"
          } items-center border-gray-700`}>
          <button
            className="flex flex-col items-center"
            onClick={() => setSelectedOne("client")}>
            <FaUser className="text-xl mb-2" />
            Client
          </button>
        </section>
        <section
          className={`w-1/3 flex justify-center h-full pt-2 ${
            selectedOne === "seeker" && "border-b-8"
          } items-center border-gray-700`}>
          <button
            className="flex flex-col items-center"
            onClick={() => setSelectedOne("seeker")}>
            <FaBriefcase className="text-xl mb-2" />
            Job Seeker
          </button>
        </section>
        <section
          className={`w-1/3 flex justify-center h-full pt-2 ${
            selectedOne === "freelancer" && "border-b-8"
          } items-center border-gray-700`}>
          <button
            className="flex flex-col items-center"
            onClick={() => setSelectedOne("freelancer")}>
            <FaSearchDollar className="text-xl mb-2" />
            Freelancer
          </button>
        </section>
      </div>
      <div className="h-1/4 p-8 border-t">{displayContent()}</div>
    </main>
  );
};

export default MainCard;
