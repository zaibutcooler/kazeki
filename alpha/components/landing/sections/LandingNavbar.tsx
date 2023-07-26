"use client";

import { FaCircleUser, FaListUl } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const LandingNavbar = () => {
  const [sidebarIsShowed, setSideBarIsShowed] = useState(false);
  const [authDropDown, setAuthDropDown] = useState(false);

  const { data: session } = useSession();

  const toggleSidebar = () => {
    setSideBarIsShowed(!sidebarIsShowed);
  };

  useEffect(() => {
    if (sidebarIsShowed) {
      document.body.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
    }
  }, [sidebarIsShowed]);

  return (
    <main className="bg-superwhite text-superblack font-semibold fixed top-0 left-0 w-full">
      <div className="flex w-full justify-between py-1.5 px-2 lg:px-4 items-center border-b">
        <section>
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
                className="absolute right-4 lg:right-6 py-4 bg-white border border-gray-200 lg:w-56 md:w-48 w-34 rounded-md shadow-md "
                onMouseLeave={() => {
                  setAuthDropDown(false);
                }}>
                {session && (
                  <button
                    onClick={() => {
                      setAuthDropDown(false);
                      signOut();
                    }}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full">
                    Log Out
                  </button>
                )}
                {!session && (
                  <button
                    onClick={() => {
                      setAuthDropDown(false);
                      signIn();
                    }}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Login
                  </button>
                )}
                {!session && (
                  <button
                    onClick={() => setAuthDropDown(false)}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Register
                  </button>
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
    </main>
  );
};

export default LandingNavbar;
