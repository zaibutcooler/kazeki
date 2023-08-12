import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { fetchJobApplicationWithOfferID } from "@/utils/fetch/fetchJobApplications";
import { fetchJobOfferWithUserID } from "@/utils/fetch/fetchJobOffers";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import JobApplicationCard from "./JobApplicationCard";

const ClientJobApplicationListing = () => {
  const [offers, setOffers] = useState<JobOfferType[]>([]);
  const [applications, setApplications] = useState<JobApplicationType[]>([]);
  const [currentOffer, setCurrentOffer] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const offerDatas = await fetchJobOfferWithUserID(session.user._id);
        offerDatas && setOffers(offerDatas);
      }
    };
    fillDatas();
  }, []);

  useEffect(() => {
    const fillApplications = async () => {
      if (currentOffer) {
        const applicationDatas = await fetchJobApplicationWithOfferID(
          currentOffer
        );
        applicationDatas && setApplications(applicationDatas);
      }
    };
    fillApplications();
  }, [currentOffer]);

  return (
    <div>
      <section>
        <div>
          {offers &&
            offers.map((offer) => (
              <div key={offer._id}>
                <h1 onClick={() => setCurrentOffer(offer._id)}>
                  {offer.title}
                </h1>
              </div>
            ))}
        </div>
      </section>
      <section>
        {applications &&
          applications.map((item) => (
            <div key={item._id}>
              <JobApplicationCard item={item} />
            </div>
          ))}
      </section>
    </div>
  );
};

export default ClientJobApplicationListing;
