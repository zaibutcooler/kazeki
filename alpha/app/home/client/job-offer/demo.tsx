"use client";
import { useState } from "react";

const JobOfferPage = () => {
  const initialFormData = {
    title: "",
    description: "",
    requirements: [""],
    responsibilities: [""],
    company: "",
    onSite: "",
    location: "",
    salary: "",
    allowance: [""],
    deadline: "",
    links: [""],
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field: any, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleRequirementChange = (index: number, value: string) => {
    const newRequirements = [...formData.requirements];
    newRequirements[index] = value;
    setFormData({ ...formData, requirements: newRequirements });
  };

  const handleResponsibilityChange = (index: number, value: string) => {
    const newResponsibilities = [...formData.responsibilities];
    newResponsibilities[index] = value;
    setFormData({ ...formData, responsibilities: newResponsibilities });
  };

  const handleAllowanceChange = (index: number, value: string) => {
    const newAllowance = [...formData.allowance];
    newAllowance[index] = value;
    setFormData({ ...formData, allowance: newAllowance });
  };

  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...formData.links];
    newLinks[index] = value;
    setFormData({ ...formData, links: newLinks });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-screen px-2  md:px-6">
      <div className="w-full bg-white p-8 rounded-lg shadow-md text-sm md:text-base">
        <div className="grid grid-cols-6 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="title"
              className="block text-gray-600 font-semibold mb-3 ">
              Job Title :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <input
              type="text"
              id="title"
              name="title"
              className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="e.g. Frontend Developer"
            />
          </div>
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="description"
              className="block text-gray-600 font-semibold mb-3">
              Description :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <textarea
              id="description"
              name="description"
              className="form-textarea w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter job description here..."
              rows={4}
            />
          </div>

          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="requirements"
              className="block text-gray-600  font-semibold mb-3">
              Requirements :
            </label>
          </div>
          {formData.requirements.map((requirement, index) => (
            <div key={index} className="col-span-4 md:col-span-3 mb-6">
              <input
                type="text"
                value={requirement}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Company Name"
              />
              <div className="w-full flex justify-end">
                <button
                  type="button"
                  onClick={() => handleRequirementChange(index, "")}
                  className="mt-4 inline-flex items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                  + Add More
                </button>
              </div>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="responsibilities"
              className="block text-gray-600  font-semibold mb-3">
              Responsibilities :
            </label>
          </div>
          {formData.responsibilities.map((responsibility, index) => (
            <div key={index} className="col-span-4 md:col-span-3 mb-6">
              <input
                type="text"
                value={responsibility}
                onChange={(e) =>
                  handleResponsibilityChange(index, e.target.value)
                }
                className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Company Name"
              />
              <div className="w-full flex justify-end">
                <button
                  type="button"
                  onClick={() => handleResponsibilityChange(index, "")}
                  className="mt-4 inline-flex items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                  + Add More
                </button>
              </div>
            </div>
          ))}
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="company"
              className="block text-gray-600  font-semibold mb-3">
              Company :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="form-input w-full  px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Company Name"
            />
          </div>

          {/* ... Onsite ... */}
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="onSite"
              className="block text-gray-600  font-semibold mb-3">
              Onsite :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <input
              type="text"
              id="onSite"
              name="onSite"
              value={formData.onSite}
              onChange={(e) => handleChange("onSite", e.target.value)}
              className="form-input w-full  px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="This should be a check box"
            />
          </div>

          {/* ... Location ... */}
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="location"
              className="block text-gray-600  font-semibold mb-3">
              Location :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="form-input w-full  px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="This should be a check box"
            />
          </div>

          {/* ... Salary ... */}
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="salary"
              className="block text-gray-600  font-semibold mb-3">
              Salary :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={(e) => handleChange("salary", e.target.value)}
              className="form-input w-full  px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="This should be a check box"
            />
          </div>

          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="responsibilities"
              className="block text-gray-600  font-semibold mb-3">
              Allowance :
            </label>
          </div>
          {formData.allowance.map((allow, index) => (
            <div key={index} className="col-span-4 md:col-span-3 mb-6">
              <input
                type="text"
                value={allow}
                onChange={(e) => handleAllowanceChange(index, e.target.value)}
                className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Company Name"
              />
              <div className="w-full flex justify-end">
                <button
                  type="button"
                  onClick={() => handleAllowanceChange(index, "")}
                  className="mt-4 inline-flex items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                  + Add More
                </button>
              </div>
            </div>
          ))}

          {/* ... Deadline ... */}
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="deadline"
              className="block text-gray-600  font-semibold mb-3">
              Deadline :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={(e) => handleChange("deadline", e.target.value)}
              className="form-input w-full px-4  py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="City, Country"
            />
          </div>

          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="responsibilities"
              className="block text-gray-600  font-semibold mb-3">
              Links :
            </label>
          </div>
          {formData.links.map((link, index) => (
            <div
              key={index}
              className="col-span-4 md:col-span-3 mb-6 flex gap-3">
              <input
                type="text"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                className="form-input w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="https://example.com/apply"
              />
              <input
                type="text"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                className="form-input w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="https://example.com/apply"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default JobOfferPage;
