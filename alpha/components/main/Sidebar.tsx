import Link from "next/link";
import { useState } from "react";

import {
  AiOutlineFundView,
  AiOutlineForm,
  AiOutlineClockCircle,
  AiOutlineUsergroupAdd,
  AiOutlineInfoCircle,
  AiOutlineStar,
  AiOutlineMail,
  AiOutlineQuestionCircle,
  AiOutlineBulb,
  AiOutlineLogout,
  AiOutlineHome,
} from "react-icons/ai";

interface Props {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({ toggleSidebar }) => {
  const jobSeekingLinks = [
    { name: "Job Listings", go: "/job-listings", icon: <AiOutlineFundView /> },
    {
      name: "Job Applications",
      go: "/job-applications",
      icon: <AiOutlineForm />,
    },
    { name: "Interviews", go: "/interviews", icon: <AiOutlineClockCircle /> },
    { name: "Resources", go: "/resources", icon: <AiOutlineUsergroupAdd /> },
  ];

  const freelanceLinks = [
    {
      name: "Freelance Listings",
      go: "/freelance-listings",
      icon: <AiOutlineFundView />,
    },
    { name: "Proposals", go: "/proposals", icon: <AiOutlineForm /> },
    { name: "Contracts", go: "/contracts", icon: <AiOutlineClockCircle /> },
    { name: "Resources", go: "/resources", icon: <AiOutlineUsergroupAdd /> },
  ];

  const otherLinks = [
    { name: "About Us", go: "/about", icon: <AiOutlineInfoCircle /> },
    { name: "Features", go: "/features", icon: <AiOutlineStar /> },
    { name: "Contact", go: "/contact", icon: <AiOutlineMail /> },
    { name: "Support", go: "/support", icon: <AiOutlineQuestionCircle /> },
    { name: "Light/Dark Mode", go: "/mode", icon: <AiOutlineBulb /> },
  ];

  return (
    <div>
      <div
        className="fixed inset-0 z-10 backdrop-filter backdrop-blur"
        onClick={toggleSidebar}>
        <div
          className="w-3/5 md:w-2/5 lg:w-1/5 bg-superwhite h-screen p-4 border-r overflow-y-auto"
          onClick={() => {}}>
          <div className="text-sm font-bold flex justify-end">
            <button onClick={toggleSidebar}>Close</button>
          </div>
          <div className="font-semibold text-lg flex justify-center my-3">
            Logo
          </div>
          <section className=" mx-2 justify-start font-normal text-sm sidebar-container">
            <div>
              {jobSeekingLinks.map((job) => (
                <div
                  key={job.name}
                  className="py-3 px-4 hover:bg-gray-100 rounded-lg">
                  <Link href={job.go} className="flex items-center">
                    {job.icon} <span className="ml-2">{job.name}</span>
                  </Link>
                </div>
              ))}
              <hr className="my-2" />
            </div>
            <div>
              {freelanceLinks.map((job) => (
                <div
                  key={job.name}
                  className="py-3 px-4 hover:bg-gray-100 rounded-lg">
                  <Link href={job.go} className="flex items-center">
                    {job.icon} <span className="ml-2">{job.name}</span>
                  </Link>
                </div>
              ))}
              <hr className="my-2" />
            </div>
            <div>
              <div className="py-3 px-4 hover:bg-gray-100">
                <Link href="/" className="flex items-center">
                  <AiOutlineHome /> <span className="ml-2">Home</span>
                </Link>
              </div>
              <div className="py-3 px-4 hover:bg-gray-100">
                <Link href="/" className="flex items-center">
                  <AiOutlineInfoCircle /> <span className="ml-2">About me</span>
                </Link>
              </div>
              <div className="py-3 px-4 hover:bg-gray-100">
                <Link href="/" className="flex items-center">
                  <AiOutlineLogout /> <span className="ml-2">Logout</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
};

export default Sidebar;
