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

  const [isNone, setIsNone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fillDatas = async () => {
      setIsLoading(true);
      const applicationDatas = await fetchJobApplication();
      const offerDatas = await fetchJobOffer();

      offerDatas && setOffers(offerDatas);
      !offers && setIsNone(true);
      setIsLoading(false);
    };
    fillDatas();
  }, []);

  const handleSearch = (items: JobOfferType[]) => {
    setOffers(items);
  };

  return (
    <div className="">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <JobHeaderCard handleSearch={handleSearch} />
          {!isNone ? (
            offers.map((offer) => (
              <main>
                <JobOfferCard jobOffer={offer} />
              </main>
            ))
          ) : (
            <div>Is none</div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
