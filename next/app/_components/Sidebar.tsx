"use client";
import { useState } from "react";

interface Props {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="fixed inset-0 z-10 backdrop-filter backdrop-blur">
        <div className="w-3/5 md:w-2/5 lg:w-1/5 bg-superwhite h-screen p-4 border-r">
          <button onClick={toggleSidebar}>Close</button>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
};

export default Sidebar;
