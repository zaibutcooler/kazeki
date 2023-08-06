import React from "react";

const TapeSection = () => {
  return (
    <div className="w-full text-white h-[300px] bg-slate-900">
      <section className="flex justify-center">
        <div className="container w-full md:w-[800px] lg:w-[1000px] px-2 md:px-4 flex justify-between">
          <div className="py-8">
            <h1 className=" font-semibold text-3xl mb-6">
              Explore everything you needs in my network
            </h1>
            <p className="leading-6 mb-6 text-slate-50">
              Welcome to my community of job seekers and clients. Find your
              dream job or hire top talent effortlessly. Join us now!
            </p>
            <div className="flex gap-6 mb-6">
              <button className="py-2 w-20 border border-white font-semibold bg-white text-slate-800 rounded-sm">
                Join
              </button>
              <button className="py-2 w-24 font-semibold bg-slate-900 border border-white text-white rounded-sm">
                Support
              </button>
            </div>
            <p className="text-sm flex">
              Thanks you for your valuable time and support! Created by
              <a
                className="hover:text-sky-500 ml-2"
                href="https://zaiyellyintaung.github.io/">
                Zai
              </a>
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default TapeSection;
