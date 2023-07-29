import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface LinkType {
  label: string;
  link: string;
}

interface FreelanceApplicationFormState {
  title: string;
  description: string;
  cv: File | null;
  negoSalary: number;
  links: LinkType[];
}

const FreelanceApplicationForm: React.FC = () => {
  const initialFormData: FreelanceApplicationFormState = {
    title: "",
    description: "",
    cv: null,
    negoSalary: 0,
    links: [{ label: "", link: "" }],
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-full md:w-[500px] lg:w-[600px] text-xs md:text-sm">
          <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
            <span className="font-semibold">Apply This Job</span>
            <button>
              <AiOutlineClose className="font-bold" />
            </button>
          </div>
          <form className="bg-white space-y-4 px-8 py-3 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div>
              <label
                htmlFor="title"
                className="block text-xs font-medium text-gray-700">
                Introduce Yourself
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md border p-2"
                placeholder="Your Title"
              />
            </div>

            <div>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md border p-2"
                placeholder="Your Description"
              />
            </div>

            <div>
              <label
                htmlFor="cv"
                className="block text-xs font-medium text-gray-700">
                CV (Upload your CV)
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                required
                accept=".pdf,.doc,.docx"
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md border p-2"
              />
            </div>

            <div>
              <label
                htmlFor="links"
                className="block text-xs font-medium text-gray-700">
                Links (e.g., LinkedIn, personal website)
              </label>
              {initialFormData.links.map((link, index) => (
                <div key={index} className="mt-1 flex justify-between">
                  <input
                    type="text"
                    name={`links[${index}].label`}
                    required
                    className="focus:ring-gray-400 focus:border-gray-400 border block w-1/3 text-xs border-gray-300 rounded-md p-2 mr-4"
                    placeholder="Enter link label"
                  />
                  <input
                    type="text"
                    name={`links[${index}].link`}
                    required
                    className="focus:ring-gray-400 focus:border-gray-400 border block w-4/6 text-xs border-gray-300 rounded-md p-2"
                    placeholder="Enter link URL"
                  />
                </div>
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-xs leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                + Add Link
              </button>
            </div>

            <div>
              <label
                htmlFor="negoSalary"
                className="block text-xs font-medium text-gray-700">
                Expected Salary
              </label>
              <input
                type="text"
                id="negoSalary"
                name="negoSalary"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md border p-2"
                placeholder="Expected Salary"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-1.5 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                Apply This Offer
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default FreelanceApplicationForm;
