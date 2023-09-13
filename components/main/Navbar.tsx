"use client";

import { FaCircleUser, FaListUl } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Box from "./Box";

const Navbar = () => {
  const [sidebarIsShowed, setSideBarIsShowed] = useState(false);
  const [authDropDown, setAuthDropDown] = useState(false);

  const toggleSidebar = () => {
    setSideBarIsShowed(!sidebarIsShowed);
  };

  const { data: session } = useSession();

  useEffect(() => {
    if (sidebarIsShowed) {
      document.body.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
    }
  }, [sidebarIsShowed]);

  return (
    <main className=" text-superblack font-semibold ">
      <Box />
      <div className="fixed left-0 top-0 flex w-full bg-superwhite justify-between py-1.5 px-2 lg:px-4 items-center border-b">
        <section>
          <button
            className="mx-2"
            onClick={toggleSidebar}
            onMouseLeave={() => setAuthDropDown(false)}>
            <FiMenu className="text-xl pt-2" />
          </button>
          <Link href="/home" className="mx-2 font-bold text-lg">
            Home
          </Link>
        </section>
        <section>
          <div>
            <button
              onClick={() => {
                setAuthDropDown(!authDropDown);
              }}
              className="mx-3 px-4 py-1.5 border border-superblack rounded-full w-[100px] flex justify-between hover:border-black">
              <FaCircleUser className="text-2xl" />
              <FaListUl className="text-2xl" />
            </button>
            {authDropDown && (
              <div
                className="absolute right-4 lg:right-6 py-4 bg-white border border-gray-200 md:w-56 w-48 rounded-md shadow-md "
                onMouseLeave={() => {
                  setAuthDropDown(false);
                }}>
                {session?.user && (
                  <button
                    onClick={() => {
                      setAuthDropDown(false);
                      signOut();
                    }}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Log Out
                  </button>
                )}
                {!session?.user && (
                  <button
                    onClick={() => {
                      setAuthDropDown(false);
                      signIn();
                    }}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Login
                  </button>
                )}
                {!session?.user && (
                  <Link
                    href="/auth/register"
                    onClick={() => setAuthDropDown(false)}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Register
                  </Link>
                )}

                <hr className="my-2" />

                <Link
                  href="/about/contact"
                  onClick={() => setAuthDropDown(false)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Contact
                </Link>
                <Link
                  href="/about/support"
                  onClick={() => setAuthDropDown(false)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Support
                </Link>
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
