"use client";
import { JobOfferType } from "@/database/JobOffer";
import { fetchJobOffer } from "@/utils/fetch/fetchJobOffers";
import { useEffect, useState } from "react";
import JobOfferCard from "./JobOfferCard";
import { fetchJobApplication } from "@/utils/fetch/fetchJobApplications";
import { FreelanceApplicationType } from "@/database/FreelanceApplication";

const JobListing = () => {
  const [offers, setOffers] = useState<JobOfferType[]>([]);
  const [applications, setApplications] = useState<FreelanceApplicationType[]>(
    []
  );

  useEffect(() => {
    const fillDatas = async () => {
      const applicationDatas = await fetchJobApplication();
      const offerDatas = await fetchJobOffer();

      offerDatas && setOffers(offerDatas);
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
