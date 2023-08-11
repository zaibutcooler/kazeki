import { JobOfferType } from "@/database/JobOffer";
import { truncateText } from "@/utils";
import { useState } from "react";

interface Props {
  jobOffer: JobOfferType;
}

const JobOfferCard: React.FC<Props> = ({ jobOffer }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="mb-2 w-full rounded-md border p-4 md:p-6">
      {showDetail ? (
        <main>
          <section className="md:flex justify-between mb-2">
            <div className="flex items-center gap-3">
              <p className="font-semibold">{jobOffer.title}</p>
              <span className="text-[0.7rem] text-gray-600 border-gray-100 py-1 px-3 rounded-full border">
                {jobOffer.onSite ? "On Site" : "Remote"}
              </span>
            </div>
            <h1 className="text-xs font-medium md:w-auto text-end">
              300$ : 500$
            </h1>
          </section>

          <section className="leading-6">
            <div className="mb-4">
              <h1 className="text-sm font-medium text-gray-800">
                Job Description
              </h1>
              <p className="text-xs text-gray-600 break-words">
                {jobOffer.description}
              </p>
            </div>

            <div className="mb-4">
              <h1 className="text-sm font-medium text-gray-800">
                Responsibilities
              </h1>
              <ul className="list-disc list-inside text-xs text-gray-600">
                {jobOffer.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-sm font-medium text-gray-800">
                Requirements
              </h1>
              <ul className="list-disc list-inside text-xs text-gray-600">
                {jobOffer.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="flex justify-between items-end mt-2">
            <div className="flex gap-3">
              <p className="text-xs text-gray-600  py-1 ">1 hour ago</p>
              <p className="text-xs text-gray-600  py-1 px-3 rounded-md border">
                14 applicants
              </p>
            </div>

            <button
              className="block text-sm font-medium leading-6 text-slate-900"
              onClick={() => setShowDetail(true)}>
              Detail
            </button>
          </section>
        </main>
      ) : (
        <main>
          <section className="md:flex justify-between mb-2">
            <div className="flex items-center gap-3">
              <p className="font-semibold">{jobOffer.title}</p>
              <span className="text-[0.7rem] text-gray-600 border-gray-100 py-1 px-3 rounded-full border">
                {jobOffer.onSite ? "On Site" : "Remote"}
              </span>
            </div>
            <h1 className="text-xs font-medium md:w-auto text-end">
              300$ : 500$
            </h1>
          </section>

          <section className="flex justify-between items-end mt-2">
            <div className="flex gap-3">
              <p className="text-xs text-gray-600  py-1 ">1 hour ago</p>
              <p className="text-xs text-gray-600  py-1 px-3 rounded-md border">
                14 applicants
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

export default JobOfferCard;
