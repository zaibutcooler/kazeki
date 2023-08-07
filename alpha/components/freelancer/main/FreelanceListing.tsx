"use client";

import { FreelanceOfferType } from "@/database/FreelanceOffer";
import FreelanceOfferCard from "./FreelanceOfferCard";
import { fetchFreelanceOffer } from "@/utils/fetch/fetchFreelanceOffers";
import { useEffect, useState } from "react";

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

  return (
    <div className="">
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
