import { LinkType } from "@/database/types";
import { RootState } from "@/store";
import createClientProfile from "@/utils/forms/createClientProfile";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

interface Props {}

const industriesArray = ["Tech", "Health", "Finance", "Design", "Marketing"];
const titleArray = [
  "Personal Information",
  "Company Information",
  "Contact Information",
];

const ClientCreateForm: React.FC<Props> = ({}) => {
  const router = useRouter();

  const [section, setSection] = useState(1);
  const client = true;
  const userID = localStorage.getItem("userID");
  // const userID = "64d126d5b344f9c883148d2d";
  console.log(userID);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [industry, setIndustry] = useState("");

  const [company, setCompany] = useState("");
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
            <div className="w-full mb-6">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-slate-900">
                Company
              </label>
              <input
                type="company"
                name="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="p-2 border rounded-md w-full mt-2"
              />
            </div>
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
          </section>
        );
      case 3:
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
      company,
      industry,
      links,
    });
    const createdProfile =
      userID &&
      (await createClientProfile({
        user: userID,
        firstName,
        lastName,
        country,
        city,
        email,
        phoneNumber,
        client,
        company,
        industry,
        links,
      }));
    if (createdProfile) {
      console.log(createdProfile);
      router.push("/auth/login");
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
        {section === 3 ? (
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

export default ClientCreateForm;
