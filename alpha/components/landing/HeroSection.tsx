import React from "react";

const HeroSection = () => {
  return (
    <section className="hero h-screen flex items-center justify-center bg-gray-100">
      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl text-gray-800 font-bold mb-8">
          Opportunities For Everyone!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          ultricies quam, ac dictum est. Integer ut consequat nulla. Sed dictum,
          urna vel venenatis lacinia, erat mauris dictum arcu, eget cursus risus
          lorem vel ipsum.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
