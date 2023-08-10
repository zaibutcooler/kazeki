import { FreelanceOfferType } from "@/database/FreelanceOffer";
import { formatClassicDate, formatDateTime } from "@/utils/formatDate";
import { useState } from "react";

interface Props {
  freelanceOffer: FreelanceOfferType;
}

const FreelanceOfferCard: React.FC<Props> = ({ freelanceOffer }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="mb-2 w-full rounded-md border p-5 font-medium text-gray-700">
      {showDetail ? (
        <main>
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg">{freelanceOffer.title}</h1>
            <p className="text-xs text-gray-400 px-3 py-1 rounded-full ">
              {formatClassicDate(String(freelanceOffer.created))}
            </p>
          </div>
        </main>
      ) : (
        <main>
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg">{freelanceOffer.title}</h1>
            <p className="text-xs font-normal text-black rounded-full ">
              From 300$ To 500$
            </p>
          </div>
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
