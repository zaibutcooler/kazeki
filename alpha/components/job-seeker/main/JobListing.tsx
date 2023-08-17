"use client";
import { JobOfferType } from "@/database/JobOffer";
import { fetchJobOffer } from "@/utils/fetch/fetchJobOffers";
import { useEffect, useState } from "react";
import JobOfferCard from "./JobOfferCard";
import { fetchJobApplication } from "@/utils/fetch/fetchJobApplications";
import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import JobHeaderCard from "./JobHeaderCard";

interface Props {}

const JobListing: React.FC<Props> = ({}) => {
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

  const handleSearch = (items: JobOfferType[]) => {
    setOffers(items);
  };

  return (
    <div className="">
      <JobHeaderCard handleSearch={handleSearch} />
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
