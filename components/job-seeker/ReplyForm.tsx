import { LinkType } from "@/database/types";
import { clearBox } from "@/store/boxSlice";
import { createFreelanceReply } from "@/utils/forms/createFreelanceReply";
import createJobApplication from "@/utils/forms/createJobApplication";
import { createJobReply } from "@/utils/forms/createJobReply";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

interface Props {
  itemID: string;
  type: string;
}

const ReplyForm: React.FC<Props> = ({ itemID, type }) => {
  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [links, setLinks] = useState<LinkType[]>([
    { link: "www.example.com", label: "haha" },
  ]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (session?.user) {
      const combinedDateTime = new Date(`${date}T${time}`).toISOString();
      console.log(links);
      if (type === "job") {
        const newReply = await createJobReply({
          user: session.user._id,
          title,
          description,
          appointment: combinedDateTime,
          links,
          itemID,
        });
        newReply && window.alert(`${type} fuck`);
      } else if (type === "freelance") {
        const newReply = await createFreelanceReply({
          user: session.user._id,
          title,
          description,
          appointment: combinedDateTime,
          links,
          itemID,
        });
        newReply && window.alert(`${type} fuck`);
      }
    }
  };

  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(clearBox());
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

            <div className="w-full mb-4 flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="appointment"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  Date
                </label>
                <input
                  type="date"
                  name="appointment"
                  id="appointment"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="p-2 border rounded-md w-full mt-1.5"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="appointment"
                  className="block text-sm font-medium leading-6 text-slate-900">
                  Time
                </label>
                <input
                  type="time"
                  name="appointment"
                  id="appointment"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="p-2 border rounded-md w-full mt-1.5"
                />
              </div>
            </div>
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

            <section></section>

            <div className="flex justify-end">
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

export default ReplyForm;
