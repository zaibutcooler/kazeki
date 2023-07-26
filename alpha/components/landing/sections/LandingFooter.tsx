import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from "react-icons/ai";

const LandingFooter = () => {
  return (
    <main className="min-h-[100px] bg-gray-50 border-t text-center md:text-start ">
      <section className="w-full md:w-[800px] lg:w-[1200px] container mx-auto p-6 ">
        <div className="block md:flex justify-between items-end w-full">
          <section className="block md:flex items-end">
            <h1 className="text-2xl font-bold m-0 md:mr-6 ">Zai</h1>
            <p className="text-xs text-gray-600 pb-[6px]">
              © 2023 My Company. All rights reserved.
            </p>
          </section>
          <section className="flex text-2xl  justify-center md:justify-start mt-1 md:mt-3">
            <AiFillTwitterSquare className="mr-4" />
            <AiFillFacebook className="mr-4" />
            <AiFillLinkedin />
          </section>
        </div>
      </section>
    </main>
  );
};

export default LandingFooter;
