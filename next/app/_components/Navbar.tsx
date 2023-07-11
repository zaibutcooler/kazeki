"use client";

import { FaCircleUser, FaListUl } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [sidebarIsShowed, setSideBarIsShowed] = useState(false);
  const [authDropDown, setAuthDropDown] = useState(false);

  const toggleSidebar = () => {
    setSideBarIsShowed(!sidebarIsShowed);
  };

  return (
    <main className="bg-superwhite text-superblack font-semibold ">
      <div className="flex w-full justify-between py-1.5 px-2 lg:px-4 items-center border-b">
        <section>
          <button
            className="mx-2"
            onClick={toggleSidebar}
            onMouseLeave={() => setAuthDropDown(false)}>
            <FiMenu className="text-xl pt-2" />
          </button>
          <a className="mx-2 font-bold text-lg">Home</a>
        </section>
        <section>
          <div>
            <button
              onClick={() => {
                setAuthDropDown(!authDropDown);
              }}
              className="mx-3 px-4 py-1.5 border border-superblack rounded-full w-[100px] flex justify-between">
              <FaCircleUser className="text-2xl" />
              <FaListUl className="text-2xl" />
            </button>
            {authDropDown && (
              <div
                className="absolute right-4 lg:right-6 py-6 bg-white border border-gray-200 lg:w-60 md:w-48 w-34 rounded-md shadow-md "
                onMouseLeave={() => {
                  setAuthDropDown(false);
                }}>
                <a
                  href="/courses/all"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200">
                  Discover Courses
                </a>

                <a
                  href="/courses/create-course"
                  className="block px-4 py-3 text-sm bg-sky-50 text-gray-700 hover:bg-sky-400">
                  Create Course
                </a>

                <a
                  href="/courses/taken"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200">
                  Finished Courses
                </a>
                <a
                  href="/courses/events"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200">
                  Events
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
      {sidebarIsShowed && <Sidebar toggleSidebar={toggleSidebar} />}
    </main>
  );
};

export default Navbar;
