import Link from "next/link";
import { jobSeekingLinks } from "@/data/sidebarLinks";
import { freelanceLinks } from "@/data/sidebarLinks";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

interface Props {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="fixed inset-0 z-10 backdrop-filter backdrop-blur">
        <div
          className="w-[230px] md:w-[250px] bg-superwhite h-screen p-4 border-r overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-white"
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
                  <FiLogOut /> <span className="ml-2">Logout</span>
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
