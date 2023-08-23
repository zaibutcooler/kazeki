"use client";
import { JobOfferCreateType } from "@/database/JobOffer";
import createJobOffer from "@/utils/forms/createJobOffer";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FreelanceOfferCreateType } from "@/database/FreelanceOffer";
import createFreelanceOffer from "@/utils/forms/createFreelanceOffer";

const industriesArray = ["Tech", "Health", "Finance", "Design", "Marketing"]; // need to improve

const page = () => {
  const initialFormData = {
    title: "Frontend Developer",
    description:
      "We are looking for a skilled frontend developer to work on an exciting freelance project. As a Frontend Developer, you will have the opportunity to create captivating user interfaces and contribute to a cutting-edge web development project. If you have a strong foundation in React, JavaScript, HTML, and CSS, and you're passionate about creating high-quality web experiences, we'd love to collaborate with you.",
    requirements: [
      "Solid understanding of frontend technologies including React, JavaScript, HTML, and CSS.",
      "Previous experience in freelance web development projects.",
    ],
    responsibilities: [
      "Design and implement user interfaces for web applications.",
      "Collaborate with backend developers to integrate frontend components.",
      "Optimize web applications for performance and responsiveness.",
      "Adhere to project deadlines and deliver high-quality code.",
    ],
    field: ["web-development"],
    projectDeadline: "2023-08-31",
    salary: ["$300", "$500"],
    deadline: "2023-08-15",
    applicationLimit: 300,
    recruitCount: 5,
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

  const toggleIndustry = (industry: string) => {
    const updatedFields = formData.field.includes(industry)
      ? formData.field.filter((item) => item !== industry)
      : [...formData.field, industry];

    setFormData({
      ...formData,
      field: updatedFields,
    });
  };

  const handleLinkChange = (index: number, field: string, value: string) => {
    const newLinks = [...formData.contact];
    newLinks[index] = {
      ...newLinks[index],
      [field]: value,
    };
    setFormData({ ...formData, contact: newLinks });
  };

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("started");
    const postBody: FreelanceOfferCreateType = {
      user: session?.user._id as string,
      ...formData,
    };
    const datas = await createFreelanceOffer(postBody);
    if (datas) {
      router.push("/home/freelance");
    }
  };

  return (
    <main className="pt-4 flex justify-center w-full text-sm">
      <form
        onSubmit={handleSubmit}
        className="p-4 md:p-8 rounded-md w-full md:w-3/4 font-medium text-slate-800">
        {/* <h1 className="text-xl text-black">Job Offer Form</h1> */}
        <section className="w-full mb-5">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-slate-900">
            Project Title
          </label>
          <input
            type="title"
            name="title"
            id="title"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="p-2 border rounded-md w-full mt-2"
          />
        </section>
        <section className="w-full mb-5">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-slate-900">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={4}
            className="p-2 border rounded-md w-full mt-2"
          />
        </section>
        <section>
          <div className="flex w-full">
            <label
              htmlFor="label"
              className="block text-sm font-medium leading-6 text-slate-900">
              Requirements
            </label>
          </div>
          <div className=" mb-5 w-full">
            {formData.requirements.map((item, index) => (
              <section className="flex w-full gap-6 ">
                <input
                  type="text"
                  key={index}
                  value={item}
                  onChange={(e) =>
                    handleRequirementChange(index, e.target.value)
                  }
                  className="p-2 border rounded-md w-full mt-2"
                />
              </section>
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
        </section>

        <section>
          <div className="flex w-full">
            <label
              htmlFor="label"
              className="block text-sm font-medium leading-6 text-slate-900">
              Responsibilities
            </label>
          </div>
          <div className=" mb-5 w-full">
            {formData.responsibilities.map((item, index) => (
              <section className="flex w-full gap-6 ">
                <input
                  type="text"
                  key={index}
                  value={item}
                  onChange={(e) =>
                    handleResponsibilityChange(index, e.target.value)
                  }
                  className="p-2 border rounded-md w-full mt-2"
                />
              </section>
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
        </section>

        <section>
          <div className="flex gap-6 w-full">
            <div className="w-1/2">
              <label
                htmlFor="label"
                className="block text-sm font-medium leading-6 text-slate-900">
                Application Deadline
              </label>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="link"
                className="block text-sm font-medium leading-6 text-slate-900">
                Project Deadline
              </label>
            </div>
          </div>
          <div className=" mb-6 w-full">
            <section className="flex w-full gap-6 ">
              <div className="w-1/2">
                <input
                  type="date"
                  name="from"
                  id="from"
                  value={formData.deadline}
                  onChange={(e) => handleChange("deadline", e.target.value)}
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="date"
                  name="to"
                  id="to"
                  value={formData.projectDeadline}
                  onChange={(e) =>
                    handleChange("projectDeadline", e.target.value)
                  }
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
            </section>
          </div>
        </section>

        <section className="w-full mb-6">
          <label
            htmlFor="firstname"
            className="block text-sm font-medium leading-6 text-slate-900">
            Industry
          </label>
          <div className="mt-2 flex gap-3 p-3 border flex-wrap text-sm rounded-md">
            {industriesArray.map((item) => (
              <button
                type="button"
                onClick={() => toggleIndustry(item)} //here
                className={`py-1 px-3 border rounded-full text-sm font-medium text-slate-600 ${
                  formData.field.includes(item)
                    ? "border-black text-black shadow-lg"
                    : ""
                }`}>
                {item}
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex gap-6 w-full">
            <div className="w-1/2">
              <label
                htmlFor="label"
                className="block text-sm font-medium leading-6 text-slate-900">
                Salary From
              </label>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="link"
                className="block text-sm font-medium leading-6 text-slate-900">
                To
              </label>
            </div>
          </div>
          <div className=" mb-6 w-full">
            <section className="flex w-full gap-6 ">
              <div className="w-1/2">
                <input
                  name="from"
                  id="from"
                  value={formData.salary[0]}
                  onChange={(e) => handleSalaryChange(0, e.target.value)}
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
              <div className="w-1/2">
                <input
                  name="to"
                  id="to"
                  value={formData.salary[1]}
                  onChange={(e) => handleSalaryChange(1, e.target.value)}
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
            </section>
          </div>
        </section>

        <section>
          <div className="flex gap-6 w-full">
            <div className="w-1/2">
              <label
                htmlFor="label"
                className="block text-sm font-medium leading-6 text-slate-900">
                Application Limit
              </label>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="link"
                className="block text-sm font-medium leading-6 text-slate-900">
                Recruit Count
              </label>
            </div>
          </div>
          <div className=" mb-6 w-full">
            <section className="flex w-full gap-6 ">
              <div className="w-1/2">
                <input
                  name="from"
                  id="from"
                  value={formData.applicationLimit}
                  onChange={(e) =>
                    handleChange("applicationLimit", e.target.value)
                  }
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
              <div className="w-1/2">
                <input
                  name="to"
                  id="to"
                  value={formData.recruitCount}
                  onChange={(e) => handleChange("recruitCount", e.target.value)}
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
            </section>
          </div>
        </section>
        <section>
          <div className="flex gap-6 w-full">
            <div className="w-1/3">
              <label
                htmlFor="label"
                className="block text-sm font-medium leading-6 text-slate-900">
                Label
              </label>
            </div>
            <div className="w-2/3">
              <label
                htmlFor="link"
                className="block text-sm font-medium leading-6 text-slate-900">
                Link
              </label>
            </div>
          </div>
          <div className=" mb-6 w-full">
            {formData.contact.map((item, index) => (
              <section className="flex w-full gap-6 " key={index}>
                <div className="w-1/3">
                  <input
                    name="label"
                    id="label"
                    value={item.label}
                    onChange={(e) =>
                      handleLinkChange(index, "label", e.target.value)
                    }
                    className="p-2 border rounded-md w-full mt-2"
                  />
                </div>
                <div className="w-2/3">
                  <input
                    name="link"
                    id="link"
                    value={item.link}
                    onChange={(e) =>
                      handleLinkChange(index, "link", e.target.value)
                    }
                    className="p-2 border rounded-md w-full mt-2"
                  />
                </div>
              </section>
            ))}

            <div className="mt-3 flex gap-4 w-full justify-end">
              {formData.contact.length !== 1 && (
                <button
                  type="button"
                  className="py-1.5 px-3 text-xs border hover:bg-slate-50"
                  onClick={() => {
                    const newLinks = [...formData.contact];
                    newLinks.pop();
                    setFormData({
                      ...formData,
                      contact: newLinks,
                    });
                  }}>
                  Remove
                </button>
              )}

              <button
                type="button"
                className="py-1.5 px-3 text-xs border hover:bg-slate-50"
                onClick={() => {
                  const newLink = [
                    ...formData.contact,
                    { label: "", link: "" },
                  ];
                  setFormData({ ...formData, contact: newLink });
                }}>
                + Add more
              </button>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
};

export default page;
