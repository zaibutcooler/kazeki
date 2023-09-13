"use client";

import { FreelanceOfferType } from "@/database/FreelanceOffer";
import FreelanceOfferCard from "./FreelanceOfferCard";
import { fetchFreelanceOffer } from "@/utils/fetch/fetchFreelanceOffers";
import { useEffect, useState } from "react";
import FreelanceHeaderCard from "./FreelanceHeaderCard";
import MainLoading from "@/components/loadings/MainLoading";

const FreelanceListing = () => {
  const [offers, setOffers] = useState<FreelanceOfferType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNone, setIsNone] = useState(true);

  useEffect(() => {
    const fillDatas = async () => {
      setIsLoading(true);
      const datas = await fetchFreelanceOffer();
      datas && setIsNone(false);
      datas && setOffers(datas);

      setIsLoading(false);
    };
    fillDatas();
  }, []);

  const handleSearch = (items: FreelanceOfferType[]) => {
    setOffers(items);
  };

  return (
    <div className="">
      <FreelanceHeaderCard handleSearch={handleSearch} />
      {!isLoading ? (
        <div>
          {isNone ? (
            <div>None</div>
          ) : (
            <div>
              {offers &&
                offers.map((offer) => (
                  <main>
                    <FreelanceOfferCard freelanceOffer={offer} />
                  </main>
                ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <MainLoading />
        </div>
      )}
    </div>
  );
};

export default FreelanceListing;
