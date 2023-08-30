"use client";
import { JobOfferType } from "@/database/JobOffer";
import { fetchJobOffer } from "@/utils/fetch/fetchJobOffers";
import { useEffect, useState } from "react";
import JobOfferCard from "./JobOfferCard";
import { fetchJobApplication } from "@/utils/fetch/fetchJobApplications";
import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import JobHeaderCard from "./JobHeaderCard";
import MainLoading from "@/components/loadings/MainLoading";

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
      <JobHeaderCard handleSearch={handleSearch} />
      {isLoading ? (
        <div>
          <MainLoading />
        </div>
      ) : (
        <div>
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
