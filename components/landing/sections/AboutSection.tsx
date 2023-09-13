import Link from "next/link";

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
          <section className="w-[300px] md:mb-0 mb-6 md:w-full h-auto border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Recruiters</h1>
            <p className="mt-4 text-gray-600 text-sm font-medium">
              Effortlessly discover exceptional talent that aligns perfectly
              with your organizational needs. Our platform streamlines the
              process, enabling you to find the ideal candidates efficiently and
              effectively.
            </p>
            <ul className="mt-6 text-gray-600 list-disc list-inside text-sm font-medium">
              <li>Access a pool of skilled professionals</li>
              <li>Streamlined candidate selection</li>
              <li>Efficient communication with applicants</li>
            </ul>
            <div className="mt-6 mb-4">
              <Link
                href="/auth/register"
                className="bg-slate-800 text-white py-2 px-4 rounded-md text-sm hover:bg-gray-900">
                Get Started
              </Link>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/3 flex md:block justify-start h-full rounded-sm border-slate-300">
          <section className="w-[300px] md:mb-0 mb-6 md:w-full h-auto border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Job Seekers</h1>
            <p className="mt-4 text-gray-600 text-sm font-medium">
              Navigate your career path with confidence. Our platform connects
              you with opportunities that match your skills, aspirations, and
              values. Unlock access to a diverse range of job openings and take
              your career to new heights.
            </p>
            <ul className="mt-6 text-gray-600 list-disc list-inside text-sm font-medium">
              <li>Discover tailored job opportunities</li>
              <li>Connect with industry professionals</li>
              <li>Showcase your unique skills and talents</li>
            </ul>
            <div className="mt-6 mb-4">
              <Link
                href="/home/job-seeking"
                className="bg-slate-800 text-white py-2 px-4 rounded-md text-sm hover:bg-gray-900">
                Explore Offers
              </Link>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/3 flex md:block justify-end h-full rounded-sm border-slate-300">
          <section className="w-[300px] md:mb-0 mb-6 md:w-full h-auto border rounded-sm p-5">
            <h1 className="text-2xl font-semibold">For Freelancers</h1>
            <p className="mt-4 text-gray-600 text-sm font-medium">
              Harness your skills and passion to secure rewarding freelance
              opportunities.I empowers you to showcase your expertise, connect
              with clients seeking your unique talents, and engaging projects
              that match your creative spirit.
            </p>
            <ul className="mt-6 text-gray-600 list-disc list-inside text-sm font-medium">
              <li>Showcase your expertise and creativity</li>
              <li>Connect with clients seeking your skills</li>
              <li>Embark on exciting and diverse projects</li>
            </ul>
            <div className="mt-6 mb-4">
              <Link
                href="/home/freelance"
                className="bg-slate-800 text-white py-2 px-4 rounded-md text-sm hover:bg-gray-900">
                Explore Projects
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
