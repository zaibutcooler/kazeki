"use client";

import { FreelanceOfferType } from "@/database/FreelanceOffer";
import FreelanceOfferCard from "./FreelanceOfferCard";
import { fetchFreelanceOffer } from "@/utils/fetch/fetchFreelanceOffers";
import { useEffect, useState } from "react";
import FreelanceHeaderCard from "./FreelanceHeaderCard";

const FreelanceListing = () => {
  const [offers, setOffers] = useState<FreelanceOfferType[]>([]);

  useEffect(() => {
    const fillDatas = async () => {
      const datas = await fetchFreelanceOffer();
      //I think I will need to filter more
      datas && setOffers(datas);
    };
    fillDatas();
  }, []);

  const handleSearch = (items: FreelanceOfferType[]) => {
    setOffers(items);
  };

  return (
    <div className="">
      <FreelanceHeaderCard handleSearch={handleSearch} />
      {offers &&
        offers.map((offer) => (
          <main>
            <FreelanceOfferCard freelanceOffer={offer} />
          </main>
        ))}
    </div>
  );
};

export default FreelanceListing;
