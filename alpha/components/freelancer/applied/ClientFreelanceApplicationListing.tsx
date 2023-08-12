import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import { FreelanceOfferType } from "@/database/FreelanceOffer";
import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { fetchFreelanceApplicationWithOfferID } from "@/utils/fetch/fetchFreelanceApplications";
import { fetchFreelanceOfferWithUserID } from "@/utils/fetch/fetchFreelanceOffers";
import { fetchJobApplicationWithOfferID } from "@/utils/fetch/fetchJobApplications";
import { fetchJobOfferWithUserID } from "@/utils/fetch/fetchJobOffers";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import FreelanceApplicationCard from "./FreelanceApplicationCard";

const ClientFreelanceApplicationListing = () => {
  const [offers, setOffers] = useState<FreelanceOfferType[]>([]);
  const [applications, setApplications] = useState<FreelanceApplicationType[]>(
    []
  );
  const [currentOffer, setCurrentOffer] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const offerDatas = await fetchFreelanceOfferWithUserID(
          session.user._id
        );
        offerDatas && setOffers(offerDatas);
        console.log('od',offerDatas)
      }
    };
    fillDatas();
  }, []);

  useEffect(() => {
    const fillApplications = async () => {
      if (currentOffer) {
        const applicationDatas = await fetchFreelanceApplicationWithOfferID(
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
              <FreelanceApplicationCard item={item} />
            </div>
          ))}
      </section>
    </div>
  );
};

export default ClientFreelanceApplicationListing;
