const AboutSection = () => {
  return (
    <section className="min-h-screen pt-14">
      <h1 className="text-4xl font-bold mb-2">Find Your Match</h1>
      <p className=" text-slate-800 text-base font-semibold mb-6">
        Connecting job seekers and clients for the perfect match.
      </p>
      <div className="w-full  md:flex block gap-4 md:h-[400px]">
        <div className="w-full md:w-1/3 flex md:block justify-end h-full rounded-sm border-slate-300">
          <section className="w-[330px] md:mb-0 mb-6 md:w-full h-[450px] md:h-full border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Recruiters</h1>
          </section>
        </div>
        <div className="w-full md:w-1/3 flex md:block justify-start h-full rounded-sm border-slate-300">
          <section className="w-[330px] md:mb-0 mb-6 md:w-full h-[450px] md:h-full border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Job-seekers</h1>
          </section>
        </div>
        <div className="w-full md:w-1/3 flex md:block justify-end h-full rounded-sm border-slate-300">
          <section className="w-[330px] md:mb-0 mb-6 md:w-full h-[450px] md:h-full border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Freelancers</h1>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
