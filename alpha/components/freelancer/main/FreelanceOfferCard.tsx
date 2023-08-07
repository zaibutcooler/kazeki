import { FreelanceOfferType } from "@/database/FreelanceOffer";
import { useState } from "react";

interface Props {
  freelanceOffer: FreelanceOfferType;
}

const FreelanceOfferCard: React.FC<Props> = ({ freelanceOffer }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="mb-2 w-full rounded-md border p-3">
      {showDetail ? (
        <main>
          <h1>{freelanceOffer.title}</h1>
        </main>
      ) : (
        <main>
          <h1>{freelanceOffer.title}</h1>
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

export default FreelanceOfferCard;
