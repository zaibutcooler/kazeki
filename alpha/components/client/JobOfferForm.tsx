import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCross } from "react-icons/fa6";

interface LinkType {
  label: string;
  link: string;
}

interface JobOfferFormState {
  title: string;
  description: string;
  requirements: string[];
  requireCount: number;
  responsibilities: string[];
  responsibilityCount: number;
  onSite: boolean;
  location: string | null;
  salary: number;
  allowance: string[];
  allowanceCount: number;
  deadline: string;
  contact: LinkType[];
}

const JobOfferForm: React.FC = () => {
  const initialFormData: JobOfferFormState = {
    title: "",
    description: "",
    requirements: [""],
    requireCount: 1,
    responsibilities: [""],
    responsibilityCount: 1,
    onSite: true,
    location: null,
    salary: 0,
    allowance: [""],
    allowanceCount: 1,
    deadline: new Date().toISOString().substr(0, 10),
    contact: [{ label: "", link: "" }],
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur first-line:z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-full md:w-[500px] lg:w-[600px] text-xs md:text-sm">
          <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
            <span className="font-semibold">Create a Job Offer</span>
            <button>
              <AiOutlineClose className="font-bold" />
            </button>
          </div>
          <form className="bg-bg_white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div>
              <label
                htmlFor="title"
                className="block font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
                placeholder="Enter the job title"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
                placeholder="Enter the job description"
              />
            </div>

            <div>
              <label
                htmlFor="responsibilities"
                className="block font-medium text-gray-700">
                Responsibilities
              </label>
              {initialFormData.responsibilities.map((responsibility, index) => (
                <input
                  key={index}
                  type="text"
                  name={`responsibilities[${index}]`}
                  required
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
                  placeholder="Enter Responsibilities"
                />
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                + Add More
              </button>
            </div>

            <div>
              <label
                htmlFor="requirements"
                className="block font-medium text-gray-700">
                Requirements
              </label>
              {initialFormData.requirements.map((requirement, index) => (
                <input
                  key={index}
                  type="text"
                  name={`requirements[${index}]`}
                  required
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
                  placeholder="Enter a requirement"
                />
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                + Add Requirement
              </button>
            </div>

            <div>
              <label
                htmlFor="onSite"
                className="block font-medium text-gray-700">
                On-Site
              </label>
              <input
                type="checkbox"
                id="onSite"
                name="onSite"
                className="focus:ring-gray-400 h-4 w-4 text-slate-600 border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
                placeholder="Enter the job location"
              />
            </div>

            <div>
              <label
                htmlFor="salary"
                className="block font-medium text-gray-700">
                Salary
              </label>
              <input
                type="number"
                id="salary"
                name="salary"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
                placeholder="Enter the job salary"
              />
            </div>

            <div>
              <label
                htmlFor="allowance"
                className="block font-medium text-gray-700">
                Allowance
              </label>
              {initialFormData.allowance.map((allowance, index) => (
                <input
                  key={index}
                  type="text"
                  name={`allowance[${index}]`}
                  required
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
                  placeholder="Enter an allowance"
                />
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                + Add Allowance
              </button>
            </div>

            <div>
              <label
                htmlFor="deadline"
                className="block font-medium text-gray-700">
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block font-medium text-gray-700">
                Contact
              </label>
              {initialFormData.contact.map((contact, index) => (
                <div key={index} className="mt-1 flex justify-between">
                  <input
                    type="text"
                    name={`contact[${index}].label`}
                    required
                    className="focus:ring-gray-400 focus:border-gray-400 block w-1/3 border-gray-300 rounded-md p-2 mr-4"
                    placeholder="Enter contact label"
                  />
                  <input
                    type="text"
                    name={`contact[${index}].link`}
                    required
                    className="focus:ring-gray-400 focus:border-gray-400 block w-4/6 border-gray-300 rounded-md p-2"
                    placeholder="Enter contact link"
                  />
                </div>
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                + Add Contact
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-1.5 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default JobOfferForm;
