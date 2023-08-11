import { FreelanceOfferType } from "@/database/FreelanceOffer";
import { formatClassicDate } from "@/utils/formatDate";
import { useState } from "react";

interface Props {
  freelanceOffer: FreelanceOfferType;
}

const FreelanceOfferCard: React.FC<Props> = ({ freelanceOffer }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="mb-2 w-full rounded-md border p-4 md:p-6">
      {showDetail ? (
        <main>
          <section className="md:flex justify-between mb-2">
            <div className="flex items-center gap-3">
              <p className="font-semibold">{freelanceOffer.title}</p>
            </div>
            <h1 className="text-xs font-medium md:w-auto text-end">
              {freelanceOffer.salary[0]}$ : {freelanceOffer.salary[1]}$
            </h1>
          </section>

          <section className="leading-6">
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

          <section className="flex justify-between items-end mt-2">
            <div className="flex gap-3">
              <p className="text-xs text-gray-600 py-1 ">
                {freelanceOffer.applicants} applicants
              </p>
              <p className="text-xs text-gray-600 py-1 px-3 rounded-md border">
                {formatClassicDate(String(freelanceOffer.deadline))} deadline
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
            </div>
            <h1 className="text-xs font-medium md:w-auto text-end">
              {freelanceOffer.salary[0]}$ : {freelanceOffer.salary[1]}$
            </h1>
          </section>

          <section className="flex justify-between items-end mt-2">
            <div className="flex gap-3">
              <p className="text-xs text-gray-600  py-1 ">
                {freelanceOffer.applicants} applicants
              </p>
              <p className="text-xs text-gray-600  py-1 px-3 rounded-md border">
                {formatClassicDate(String(freelanceOffer.deadline))} deadline
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
