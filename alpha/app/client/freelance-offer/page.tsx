"use client";
import { FreelanceOfferCreateType } from "@/database/FreelanceOffer";
import createFreelanceOffer from "@/utils/forms/createFreelanceOffer";
import { useSession } from "next-auth/react";
import { useState } from "react";

const FreelanceOfferPage = () => {
  const initialFormData = {
    title: "Frontend Developer",
    description: "We are looking for a skilled frontend developer...",
    requirements: ["React", "JavaScript", "HTML", "CSS"],
    responsibilities: [
      "Design and implement user interfaces...",
      "Collaborate with backe-end developers...",
    ],
    field: ["web-development"],
    projectDeadline: "2023-08-31",
    salary: ["300", "500"],
    deadline: "2023-08-31",
    contact: [{ label: "github", link: "https://github.com/zaiYellYintAung" }],
  };
  const { data: session } = useSession();
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

  const handleSalaryChange = (index: number, value: string) => {
    const newSalary = [...formData.salary];
    newSalary[index] = value;
    setFormData({ ...formData, salary: newSalary });
  };

  const handleResponsibilityChange = (index: number, value: string) => {
    const newResponsibilities = [...formData.responsibilities];
    newResponsibilities[index] = value;
    setFormData({ ...formData, responsibilities: newResponsibilities });
  };

  const handleLinkChange = (index: number, field: string, value: string) => {
    const newLinks = [...formData.contact];
    newLinks[index] = {
      ...newLinks[index],
      [field]: value,
    };
    setFormData({ ...formData, contact: newLinks });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("started");
    const postBody: FreelanceOfferCreateType = {
      user: session?.user._id as string,
      ...formData,
    };
    const datas = await createFreelanceOffer(postBody);
    if (datas) {
      window.alert("fuck");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-screen px-2  md:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white p-4 md:p-8 rounded-lg shadow-md text-sm md:text-base">
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
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="e.g. Frontend Developer"
            />
          </div>
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="field"
              className="block text-gray-600 font-semibold mb-3 ">
              Related Field
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <input
              type="text"
              id="field"
              name="field"
              disabled
              className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Will make it later"
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
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
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
          <div className="col-span-4 md:col-span-3 mb-6">
            {formData.requirements.map((requirement, index) => (
              <input
                type="text"
                key={index}
                value={requirement}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                className="form-input w-full px-4 py-2 rounded-lg border mb-3 border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Company Name"
              />
            ))}
            <div className="w-full flex justify-end">
              {formData.requirements.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const newRequirements = [...formData.requirements];
                    newRequirements.pop();
                    setFormData({ ...formData, requirements: newRequirements });
                  }}
                  className="mt-4 inline-flex mr-4 items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                  Remove
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  const newForm = [...formData.requirements, ""];
                  setFormData({ ...formData, requirements: newForm });
                }}
                className="mt-4 inline-flex items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                + Add More
              </button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="projectDeadline"
              className="block text-gray-600  font-semibold mb-3">
              Project Deadline :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            <input
              type="date"
              id="projectDeadline"
              name="projectDeadline"
              value={formData.projectDeadline}
              onChange={(e) => handleChange("projectDeadline", e.target.value)}
              className="form-input w-full px-4  py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="City, Country"
            />
          </div>
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="responsibilities"
              className="block text-gray-600  font-semibold mb-3">
              Responsibilities :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6">
            {formData.responsibilities.map((responsibility, index) => (
              <input
                type="text"
                value={responsibility}
                key={index}
                onChange={(e) =>
                  handleResponsibilityChange(index, e.target.value)
                }
                className="form-input w-full px-4 py-2 rounded-lg border mb-3 border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Company Name"
              />
            ))}
            <div className="w-full flex justify-end">
              {formData.responsibilities.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const newResponsibilities = [...formData.responsibilities];
                    newResponsibilities.pop();
                    setFormData({
                      ...formData,
                      responsibilities: newResponsibilities,
                    });
                  }}
                  className="mt-4 inline-flex mr-4 items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                  Remove
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  const newForm = [...formData.responsibilities, ""];
                  setFormData({ ...formData, responsibilities: newForm });
                }}
                className="mt-4 inline-flex items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                + Add More
              </button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="salary"
              className="block text-gray-600  font-semibold mb-3">
              Salary Range :
            </label>
          </div>
          <div className="col-span-4 md:col-span-3 mb-6 flex gap-4">
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary[0]}
              onChange={(e) => handleSalaryChange(0, e.target.value)}
              className="form-input w-full  px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Salary From"
            />
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary[1]}
              onChange={(e) => handleSalaryChange(1, e.target.value)}
              className="form-input w-full  px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Salary To"
            />
          </div>
          <div className="col-span-2 md:col-span-1 pr-2 md:pr-4 mt-2 w-full flex justify-end">
            <label
              htmlFor="deadline"
              className="block text-gray-600  font-semibold mb-3">
              Form Deadline :
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
              className="block text-gray-600 font-semibold mb-3">
              Links :
            </label>
          </div>{" "}
          <div className="col-span-4 md:col-span-3 mb-6">
            {formData.contact.map((link, index) => (
              <div className=" flex gap-3 mb-3" key={index}>
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) =>
                    handleLinkChange(index, "label", e.target.value)
                  }
                  className="form-input w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Label"
                />
                <input
                  type="text"
                  value={link.link}
                  onChange={(e) =>
                    handleLinkChange(index, "link", e.target.value)
                  }
                  className="form-input w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Link URL"
                />
              </div>
            ))}
            <div className="w-full flex justify-end">
              {formData.contact.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const newLinks = [...formData.contact];
                    newLinks.pop();
                    setFormData({
                      ...formData,
                      contact: newLinks,
                    });
                  }}
                  className="mt-4 inline-flex mr-4 items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                  Remove
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  const newLink = [
                    ...formData.contact,
                    { label: "", link: "" },
                  ];
                  setFormData({ ...formData, contact: newLink });
                }}
                className="mt-4 inline-flex items-center px-3 py-2 rounded-md text-sm leading-4 font-medium border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                + Add More
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default FreelanceOfferPage;
