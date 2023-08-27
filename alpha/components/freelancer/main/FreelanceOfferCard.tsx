import ApplyNowButton from "@/components/mini/ApplyNowButton";
import { FreelanceOfferType } from "@/database/FreelanceOffer";
import JobOffer from "@/database/JobOffer";
import { setBox } from "@/store/boxSlice";
import { formatClassicDate } from "@/utils/formatDate";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { FaDotCircle } from "react-icons/fa";
import { FaCircle, FaCopy, FaRegCopy } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { useDispatch } from "react-redux";

interface Props {
  freelanceOffer: FreelanceOfferType;
}

const FreelanceOfferCard: React.FC<Props> = ({ freelanceOffer }) => {
  const [showDetail, setShowDetail] = useState(false);
  const dispatch = useDispatch();

  const { data: session } = useSession();

  return (
    <div className="mb-2 w-full rounded-md border p-4 md:p-6">
      {showDetail ? (
        <main>
          <section className="md:flex justify-between mb-2">
            <div className="flex items-center gap-3">
              <p className="font-semibold">{freelanceOffer.title}</p>
              <span className="text-[0.7rem] text-gray-600 border-gray-100 py-1 px-3 rounded-full border capitalize">
                {freelanceOffer.field}
              </span>
            </div>
            <h1 className="text-xs font-medium md:w-auto text-end">
              {freelanceOffer.salary[0]}$ : {freelanceOffer.salary[1]}$
            </h1>
          </section>

          <section className="leading-6 mb-2">
            <div className="mb-4">
              <h1 className="text-sm font-medium text-gray-800">Description</h1>
              <p className="text-xs text-gray-600 break-words">
                {freelanceOffer.description}
              </p>
            </div>

            <div className="mb-4">
              <h1 className="text-sm font-medium text-gray-800">
                Responsibilities
              </h1>
              <ul className="list-disc list-inside text-xs text-gray-600">
                {freelanceOffer.responsibilities.map(
                  (responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h1 className="text-sm font-medium text-gray-800">
                Requirements
              </h1>
              <ul className="list-disc list-inside text-xs text-gray-600">
                {freelanceOffer.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="flex md:justify-between justify-start gap-4 md:gap-6 mb-4 items-center">
            <ApplyNowButton
              handleClick={() => {
                dispatch(
                  setBox({ currentBox: "freelance", id: freelanceOffer._id })
                );
              }}
              disableCondition={
                session?.user &&
                freelanceOffer.applicants.includes(session.user._id)
              }
            />

            <div className=" flex  rounded-md w-auto md:w-3/4 p-1.5 items-center gap-3">
              <h1 className="hidden md:block text-xs font-medium text-gray-600 ">
                For More Info :
              </h1>
              <div className="flex gap-3 text-[0.7rem]">
                {freelanceOffer.contact.map((item) => (
                  <a className="capitalize flex items-center cursor-pointer py-1 px-3 rounded-sm border hover:border-slate-800">
                    {item.label} <FaRegCopy className="ml-2" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="flex justify-between items-end mt-2">
            <div className="flex gap-3">
              <p className="text-xs text-gray-600  py-1 ">1 hour ago</p>
              <p className="text-xs text-gray-600  py-1 px-3 rounded-md border">
                {freelanceOffer.applicants.length} applicants
              </p>
            </div>

            <button
              className="block text-sm font-medium leading-6 text-slate-900"
              onClick={() => setShowDetail(false)}>
              Hide Detail
            </button>
          </section>
        </main>
      ) : (
        <main>
          <section className="md:flex justify-between mb-2">
            <div className="flex items-center gap-3">
              <p className="font-semibold">{freelanceOffer.title}</p>
              <span className="text-[0.7rem] text-gray-600 border-gray-100 py-1 px-3 rounded-full border capitalize">
                {freelanceOffer.field}
              </span>
            </div>
            <h1 className="text-xs font-medium md:w-auto text-end">
              {freelanceOffer.salary[0]} $ : {freelanceOffer.salary[1]} $
            </h1>
          </section>

          <section className="flex justify-between items-end mt-2">
            <div className="flex gap-3">
              <p className="text-xs text-gray-600  py-1 ">1 hour ago</p>
              <p className="text-xs text-gray-600  py-1 px-3 rounded-md border">
                {freelanceOffer.applicants.length} applicants
              </p>
            </div>

            <button
              className="block text-sm font-medium leading-6 text-slate-900"
              onClick={() => setShowDetail(true)}>
              Detail
            </button>
          </section>
        </main>
      )}
    </div>
  );
};

export default FreelanceOfferCard;
