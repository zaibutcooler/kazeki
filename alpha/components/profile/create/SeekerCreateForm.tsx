import { PastJobsType } from "@/database/UserProfile";
import { LinkType } from "@/database/types";
import { RootState } from "@/store";
import createSeekerProfile from "@/utils/forms/createSeekerProfile";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheck, FaCross } from "react-icons/fa6";
import { useSelector } from "react-redux";

interface Props {}

const industriesArray = ["Tech", "Health", "Finance", "Design", "Marketing"];
const titleArray = [
  "Personal Information",
  "Your Educations",
  "Job History",
  "Contact Links",
];

const SeekerCreateForm: React.FC<Props> = ({}) => {
  const [section, setSection] = useState(1);
  const client = false;
  // const userID = useSelector((state: RootState) => state.user.userID);
  const userID = "64d12412ea7974dcc7925d02";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [industry, setIndustry] = useState("");

  const [collage, setCollage] = useState({ school: "", graduated: false });
  const [pastJobs, setPastJobs] = useState<PastJobsType[]>([
    { employer: "", from: "", to: "" },
  ]);

  const [links, setLinks] = useState<LinkType[]>([{ label: "", link: "" }]);

  const showSection = () => {
    switch (section) {
      case 1:
        return (
          <section className="h-[300px] my-[20px]">
            <div className="flex gap-6 mb-6">
              <div className="w-1/2">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  Firstname
                </label>
                <input
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  Lastname
                </label>
                <input
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-slate-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded-md w-full mt-2"
              />
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-slate-900">
                Phone-Number
              </label>
              <input
                type="phonenumber"
                name="phonenumber"
                id="phonenumber"
                value={phoneNumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                className="p-2 border rounded-md w-full mt-2"
              />
            </div>
          </section>
        );
      case 2:
        return (
          <section className="h-[300px] my-[20px]">
            <div className="flex gap-6 mb-6">
              <div className="w-1/2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  Country
                </label>
                <input
                  name="country"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  City
                </label>
                <input
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
            </div>

            <div className="w-full mb-6">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-slate-900">
                Industry
              </label>
              <div className="mt-2 flex gap-4">
                {industriesArray.map((item) => (
                  <button
                    type="button"
                    onClick={() => setIndustry(item)}
                    className={`py-1.5 px-4 border rounded-md text-sm font-medium text-slate-600 ${
                      item === industry
                        ? "border-black text-black shadow-lg"
                        : ""
                    }`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-6 mb-6">
              <div className="w-3/4">
                <label
                  htmlFor="college"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  University
                </label>
                <input
                  name="college"
                  id="college"
                  value={collage.school}
                  onChange={(e) =>
                    setCollage({ ...collage, school: e.target.value })
                  }
                  className="p-2 border rounded-md w-full mt-2"
                />
              </div>
              <div className="w-1/4">
                <label
                  htmlFor="firstname"
                  className="text-sm font-medium leading-6 text-slate-900 flex items-center">
                  Graduated: ({collage.graduated ? <FaCheck /> : <FaTimes />})
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setCollage({ ...collage, graduated: !collage.graduated })
                  }
                  className="h-[42px] border items-center  text-xs rounded-md w-full justify-center mt-2 gap-2 font-semibold flex">
                  {collage.graduated ? "Graduated" : "Ungraduated"}
                </button>
              </div>
            </div>
          </section>
        );
      case 3:
        return (
          <section className="h-[300px] my-[20px]">
            <div className="flex gap-6 w-full">
              <div className="w-1/2">
                <label
                  htmlFor="label"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  Employer
                </label>
              </div>
              <div className="w-1/4">
                <label
                  htmlFor="link"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  From
                </label>
              </div>
              <div className="w-1/4">
                <label
                  htmlFor="link"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  To
                </label>
              </div>
            </div>
            <div className=" mb-6 w-full">
              {pastJobs.map((item, index) => (
                <section className="flex w-full gap-6 ">
                  <div className="w-1/2">
                    <input
                      name="label"
                      id="label"
                      value={item.employer}
                      onChange={(e) =>
                        handleJobsChange("employer", index, e.target.value)
                      }
                      className="p-2 border rounded-md w-full mt-2"
                    />
                  </div>
                  <div className="w-1/4">
                    <input
                      type="date"
                      name="link"
                      id="link"
                      value={item.from}
                      onChange={(e) =>
                        handleJobsChange("from", index, e.target.value)
                      }
                      className="p-2 border rounded-md w-full mt-2"
                    />
                  </div>
                  <div className="w-1/4">
                    <input
                      type="date"
                      name="link"
                      id="link"
                      value={item.to}
                      onChange={(e) =>
                        handleJobsChange("to", index, e.target.value)
                      }
                      className="p-2 border rounded-md w-full mt-2"
                    />
                  </div>
                </section>
              ))}

              <div className="mt-3 flex gap-4 w-full justify-end">
                {pastJobs.length !== 1 && (
                  <button
                    type="button"
                    className="py-1.5 px-3 text-xs border hover:bg-slate-50 "
                    onClick={() => {
                      const updatedPastJobs = [...pastJobs];
                      updatedPastJobs.splice(pastJobs.length - 1, 1);
                      setPastJobs(updatedPastJobs);
                    }}>
                    Remove
                  </button>
                )}
                {pastJobs.length !== 5 && (
                  <button
                    type="button"
                    className="py-1.5 px-3 text-xs border hover:bg-slate-50 "
                    onClick={() => {
                      setPastJobs([
                        ...pastJobs,
                        { employer: "", from: "", to: "" },
                      ]);
                    }}>
                    + Add more
                  </button>
                )}
              </div>
            </div>
          </section>
        );
      case 4:
        return (
          <section className="h-[300px] my-[20px]">
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
              {links.map((item, index) => (
                <section className="flex w-full gap-6 ">
                  <div className="w-1/3">
                    <input
                      name="label"
                      id="label"
                      value={item.label}
                      onChange={(e) =>
                        handleLinkChange("label", index, e.target.value)
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
                        handleLinkChange("link", index, e.target.value)
                      }
                      className="p-2 border rounded-md w-full mt-2"
                    />
                  </div>
                </section>
              ))}

              <div className="mt-3 flex gap-4 w-full justify-end">
                {links.length !== 1 && (
                  <button
                    type="button"
                    className="py-1.5 px-3 text-xs border hover:bg-slate-50 "
                    onClick={() => {
                      const updatedLinks = [...links];
                      updatedLinks.splice(links.length - 1, 1);
                      setLinks(updatedLinks);
                    }}>
                    Remove
                  </button>
                )}
                {links.length !== 5 && (
                  <button
                    type="button"
                    className="py-1.5 px-3 text-xs border hover:bg-slate-50 "
                    onClick={() => {
                      setLinks([...links, { label: "", link: "" }]);
                    }}>
                    + Add more
                  </button>
                )}
              </div>
            </div>
          </section>
        );
    }
  };

  const handleLinkChange = (form: string, index: number, value: string) => {
    const updatedLinks = [...links];
    if (form === "label") {
      updatedLinks[index].label = value;
    } else if (form === "link") {
      updatedLinks[index].link = value;
    }
    setLinks(updatedLinks);
  };

  const handleJobsChange = (form: string, index: number, value: string) => {
    const updatedPastJobs = [...pastJobs];
    if (form === "employer") {
      updatedPastJobs[index].employer = value;
    } else if (form === "from") {
      updatedPastJobs[index].from = value;
    } else if (form === "to") {
      updatedPastJobs[index].to = value;
    }
    setPastJobs(updatedPastJobs);
  };

  const handleSubmit = async () => {
    window.alert("starting");
    console.log({
      user: userID,
      firstName,
      lastName,
      country,
      city,
      email,
      phoneNumber,
      client,
      industry,
      collage,
      pastJobs,
      links,
    });
    const createdProfile = await createSeekerProfile({
      user: userID,
      firstName,
      lastName,
      country,
      city,
      email,
      phoneNumber,
      client,
      industry,
      collage,
      pastJobs,
      links,
    });
    if (createdProfile) {
      window.alert("done");
      console.log(createdProfile);
    }
  };

  return (
    <main className="md:w-[500px] lg:w-[600px] min-h-[440px] w-[350px] px-8 pt-6 bg-white shadow-md mx-3">
      <h1 className="font-semibold text-lg">{titleArray[section - 1]}</h1>

      <div>{showSection()}</div>

      <div className="w-full flex justify-between font-semibold">
        {section === 1 ? (
          <button type="button">Go Back</button>
        ) : (
          <button type="button" onClick={() => setSection(section - 1)}>
            Back
          </button>
        )}
        {section === 4 ? (
          <button onClick={() => handleSubmit()}>Finish</button>
        ) : (
          <button
            type="button"
            className=""
            onClick={() => setSection(section + 1)}>
            Next
          </button>
        )}
      </div>
    </main>
  );
};

export default SeekerCreateForm;
