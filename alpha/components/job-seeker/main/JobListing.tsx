"use client";
import { JobOfferType } from "@/database/JobOffer";
import { fetchJobOffer } from "@/utils/fetch/fetchJobOffers";
import { useEffect, useState } from "react";
import JobOfferCard from "./JobOfferCard";

const JobListing = () => {
  const [offers, setOffers] = useState<JobOfferType[]>([]);

  useEffect(() => {
    const fillDatas = async () => {
      const datas = await fetchJobOffer();
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
            <JobOfferCard jobOffer={offer} />
          </main>
        ))}
    </div>
  );
};

export default JobListing;
