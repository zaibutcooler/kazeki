import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import { FreelanceOfferType } from "@/database/FreelanceOffer";
import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { fetchFreelanceApplicationWithOfferID } from "@/utils/fetch/fetchFreelanceApplications";
import { fetchFreelanceOfferWithUserID } from "@/utils/fetch/fetchFreelanceOffers";
import { fetchJobApplicationWithOfferID } from "@/utils/fetch/fetchJobApplications";
import { fetchJobOfferWithUserID } from "@/utils/fetch/fetchJobOffers";

import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import FreelanceApplicationCard from "./FreelanceApplicationCard";
import { AiOutlineDown } from "react-icons/ai";

const ClientFreelanceApplicationListing = () => {
  const [offers, setOffers] = useState<FreelanceOfferType[]>([]);
  const [applications, setApplications] = useState<FreelanceApplicationType[]>(
    []
  );
  const [currentOffer, setCurrentOffer] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: session } = useSession();

  const [buttonWidth, setButtonWidth] = useState(0);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.getBoundingClientRect().width;
      setButtonWidth(buttonWidth);
    }
  }, [offers]);

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const offerDatas = await fetchFreelanceOfferWithUserID(
          session.user._id
        );
        offerDatas && setOffers(offerDatas);
        console.log("od", offerDatas);
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
    <div className="mt-2 md:flex flex-row-reverse gap-4">
      <section className="w-full md:w-1/3">
        <div className="hidden md:block mt-2">
          {offers &&
            offers.map((offer) => (
              <div
                key={offer._id}
                className="hidden md:block w-full p-4 rounded-sm border text-sm mb-2">
                <h1
                  onClick={() => setCurrentOffer(offer._id)}
                  className="font-semibold mb-2 cursor-pointer">
                  {offer.title}
                </h1>
                <div className="flex justify-between text-xs ">
                  <p>{offer.applicants.length} Applicants</p>
                </div>
              </div>
            ))}
        </div>

        <div className="block text-xs md:hidden font-normal w-full">
          <button
            ref={buttonRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full py-1.5 px-3 flex justify-between items-center rounded-sm border hover:border-gray-400 text-gray-800 text-sm mb-2 font-semibold cursor-pointer">
            Select Offer <AiOutlineDown />
          </button>
          {isDropdownOpen && (
            <div
              className="absolute z-10 bg-white shadow-md border rounded-sm max-w-screen-sm"
              style={{ width: buttonWidth + "px" }}>
              {offers &&
                offers.map((offer) => (
                  <div
                    key={offer._id}
                    className="p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => {
                      setCurrentOffer(offer._id);
                      setIsDropdownOpen(false);
                    }}>
                    <p>{offer.title}</p>

                    <span className="text-[0.6rem] p-1">
                      {offer.applicants.length}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
      <section className="w-full md:w-2/3">
        {applications &&
          applications.map((item) => (
            <div key={item._id} className="mt-2">
              <FreelanceApplicationCard item={item} />
            </div>
          ))}
      </section>
    </div>
  );
};

export default ClientFreelanceApplicationListing;
