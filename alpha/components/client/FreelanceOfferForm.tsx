import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface LinkType {
  label: string;
  link: string;
}

interface FreelanceOfferFormState {
  title: string;
  detail: string;
  requirements: string[];
  responsibilities: string[];
  salaryFrom: number;
  salaryTo: number;
  field: string[];
  timeRange: string;
  contact: LinkType[];
  formClose: string;
}

const FreelanceOfferForm: React.FC = () => {
  const initialFormData: FreelanceOfferFormState = {
    title: "",
    detail: "",
    requirements: [""],
    responsibilities: [""],
    salaryFrom: 0,
    salaryTo: 0,
    field: [],
    timeRange: "",
    contact: [{ label: "", link: "" }],
    formClose: "",
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur first-line:z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-[600px]">
          <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
            <span className="font-semibold">Create a Freelance Offer</span>
            <button>
              <AiOutlineClose className="font-bold" />
            </button>
          </div>
          <form className="bg-bg_white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Enter the job title"
              />
            </div>

            <div>
              <label
                htmlFor="detail"
                className="block text-sm font-medium text-gray-700">
                Job Detail
              </label>
              <textarea
                id="detail"
                name="detail"
                required
                rows={4}
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Enter the job detail"
              />
            </div>

            <div>
              <label
                htmlFor="responsibilities"
                className="block text-sm font-medium text-gray-700">
                Responsibilities
              </label>
              {initialFormData.responsibilities.map((responsibility, index) => (
                <input
                  key={index}
                  type="text"
                  name={`responsibilities[${index}]`}
                  required
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Enter Responsibilities"
                />
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                + Add More
              </button>
            </div>

            <div>
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-gray-700">
                Requirements
              </label>
              {initialFormData.requirements.map((requirement, index) => (
                <input
                  key={index}
                  type="text"
                  name={`requirements[${index}]`}
                  required
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Enter a requirement"
                />
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                + Add Requirement
              </button>
            </div>

            <div>
              <label
                htmlFor="salaryFrom"
                className="block text-sm font-medium text-gray-700">
                Salary From
              </label>
              <input
                type="number"
                id="salaryFrom"
                name="salaryFrom"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Enter the starting salary"
              />
            </div>

            <div>
              <label
                htmlFor="salaryTo"
                className="block text-sm font-medium text-gray-700">
                Salary To
              </label>
              <input
                type="number"
                id="salaryTo"
                name="salaryTo"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Enter the maximum salary"
              />
            </div>

            <div>
              <label
                htmlFor="field"
                className="block text-sm font-medium text-gray-700">
                Field (e.g., web, software, programming)
              </label>
              <input
                type="text"
                id="field"
                name="field"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Enter the job field"
              />
            </div>

            <div>
              <label
                htmlFor="timeRange"
                className="block text-sm font-medium text-gray-700">
                Time Range (e.g., 1 day, 1 week, 1 month)
              </label>
              <input
                type="text"
                id="timeRange"
                name="timeRange"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Enter the time range for the job"
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              {initialFormData.contact.map((contact, index) => (
                <div key={index} className="mt-1 flex justify-between">
                  <input
                    type="text"
                    name={`contact[${index}].label`}
                    required
                    className="focus:ring-gray-400 focus:border-gray-400 block w-1/3 sm:text-sm border-gray-300 rounded-md p-2 mr-4"
                    placeholder="Enter contact label"
                  />
                  <input
                    type="text"
                    name={`contact[${index}].link`}
                    required
                    className="focus:ring-gray-400 focus:border-gray-400 block w-4/6 sm:text-sm border-gray-300 rounded-md p-2"
                    placeholder="Enter contact link"
                  />
                </div>
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                + Add Contact
              </button>
            </div>

            <div>
              <label
                htmlFor="formClose"
                className="block text-sm font-medium text-gray-700">
                Form Close Date
              </label>
              <div className="flex">
                <input
                  type="date"
                  id="formClose"
                  name="formClose"
                  required
                  className="mt-1 mr-2 focus:ring-gray-400 focus:border-gray-400 block w-1/2 sm:text-sm border-gray-300 rounded-md p-2"
                />
                <input
                  type="time"
                  id="formCloseTime"
                  name="formCloseTime"
                  required
                  className="mt-1 ml-2 focus:ring-gray-400 focus:border-gray-400 block w-1/2 sm:text-sm border-gray-300 rounded-md p-2"
                />
              </div>
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

export default FreelanceOfferForm;
