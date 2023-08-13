import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import createFreelanceApplication from "@/utils/forms/createFreelanceApplication";
import { LinkType } from "@/database/types";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { clearBox } from "@/store/boxSlice";

interface Props {
  itemID: string;
}

const FreelanceApplicationForm: React.FC<Props> = ({ itemID }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [links, setLinks] = useState<LinkType[]>([
    { link: "www.example.com", label: "haha" },
  ]);
  const [negoSalary, setNegoSalary] = useState("");

  const { data: session } = useSession();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (session?.user) {
      const newItem = await createFreelanceApplication({
        user: session.user._id,
        title,
        description,
        cv: "https://",
        links,
        freelance: itemID,
        negoSalary: Number(negoSalary),
      });
      newItem && handleBack();
    }
  };

  const dispatch = useDispatch();

  const handleLinkChange = (form: string, index: number, value: string) => {
    const updatedLinks = [...links];
    if (form === "label") {
      updatedLinks[index].label = value;
    } else if (form === "link") {
      updatedLinks[index].link = value;
    }
    setLinks(updatedLinks);
  };

  const handleBack = () => {
    dispatch(clearBox());
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-full md:w-[400px] lg:w-[500px] text-xs md:text-sm">
          <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
            <span className="font-semibold">Reply</span>
            <button onClick={handleBack}>
              <AiOutlineClose className="font-bold" />
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white space-y-4 px-8 py-3 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-white">
            <div className="w-full mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-slate-900">
                Title
              </label>
              <input
                type="title"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border rounded-md w-full mt-1.5"
              />
            </div>

            <div className="w-full mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-slate-900">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border rounded-md row-3  w-full mt-1.5"
              />
            </div>

            <section>
              <div className="flex  w-full">
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

            <div className="w-full mb-4 flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="appointment"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  Resume
                </label>
                <input
                  type="file"
                  name="cv"
                  id="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files) {
                      setCv(e.target.files[0]);
                    }
                  }}
                  className="py-1 px-3 w-full rounded-md border text-slate-800 mt-2"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="appointment"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  Expected Salary
                </label>
                <input
                  type="number"
                  name="negoSalary"
                  id="negoSalary"
                  value={negoSalary}
                  onChange={(e) => setNegoSalary(e.target.value)}
                  className="p-2 border rounded-md w-full mt-1.5"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="py-1.5 px-3 rounded-sm bg-slate-800 text-white">
                Reply
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default FreelanceApplicationForm;
