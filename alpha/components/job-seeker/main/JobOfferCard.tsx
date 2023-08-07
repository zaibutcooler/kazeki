import { JobOfferType } from "@/database/JobOffer";
import { useState } from "react";

interface Props {
  jobOffer: JobOfferType;
}

const JobOfferCard: React.FC<Props> = ({ jobOffer }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="mb-2 w-full rounded-md border p-3">
      {showDetail ? (
        <main>
          <h1>{jobOffer.title}</h1>
        </main>
      ) : (
        <main>
          <h1>{jobOffer.title}</h1>
          <div className="flex justify-end">
            <button
              className="block text-sm font-medium leading-6 text-slate-900"
              onClick={() => setShowDetail(true)}>
              Detail
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default JobOfferCard;
