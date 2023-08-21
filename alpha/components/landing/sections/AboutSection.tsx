const AboutSection = () => {
  return (
    <section className="min-h-screen pt-14">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Discover Your Ideal Match
      </h1>
      <p className="text-slate-800 text-sm md:text-base font-semibold mb-6">
        Connecting talented job seekers and discerning clients for the perfect
        professional synergy.
      </p>
      <div className="w-full md:flex block gap-4 md:h-[400px]">
        <div className="w-full md:w-1/3 flex md:block justify-end h-full rounded-sm border-slate-300">
          <section className="w-[330px] md:mb-0 mb-6 md:w-full h-[450px] md:h-full border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Recruiters</h1>
            <p className="mt-4 text-gray-600 ">
              Effortlessly discover exceptional talent that aligns perfectly
              with your organizational needs. Our platform streamlines the
              process, enabling you to find the ideal candidates efficiently and
              effectively.
            </p>
          </section>
        </div>
        <div className="w-full md:w-1/3 flex md:block justify-start h-full rounded-sm border-slate-300">
          <section className="w-[330px] md:mb-0 mb-6 md:w-full h-[450px] md:h-full border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Job Seekers</h1>
            <p className="mt-4 text-gray-600 ">
              Navigate your career path with confidence. Our platform connects
              you with opportunities that match your skills, aspirations, and
              values. Unlock access to a diverse range of job openings and take
              your career to new heights.
            </p>
          </section>
        </div>
        <div className="w-full md:w-1/3 flex md:block justify-end h-full rounded-sm border-slate-300">
          <section className="w-[330px] md:mb-0 mb-6 md:w-full h-[450px] md:h-full border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Freelancers</h1>
            <p className="mt-4 text-gray-600 ">
              Harness your skills and passion to secure rewarding freelance
              opportunities. Our platform empowers you to showcase your
              expertise, connect with clients seeking your unique talents, and
              embark on engaging projects that match your creative spirit.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
