import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { fetchJobApplicationWithOfferID } from "@/utils/fetch/fetchJobApplications";
import { fetchJobOfferWithUserID } from "@/utils/fetch/fetchJobOffers";
import { useSession } from "next-auth/react";
import React, { useEffect, useState, useRef } from "react";
import JobApplicationCard from "./JobApplicationCard";
import { BsChevronCompactDown } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { createJobReply } from "@/utils/forms/createJobReply";

const ClientJobApplicationListing = () => {
  const [offers, setOffers] = useState<JobOfferType[]>([]);
  const [applications, setApplications] = useState<JobApplicationType[]>([]);
  const [currentOffer, setCurrentOffer] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [loadingOne, setLoadingOne] = useState(false);
  const [loadingTwo, setLoadingTwo] = useState(false);

  const [isNoneOne, setIsNoneOne] = useState(true);
  const [isNoneTwo, setIsNoneTwo] = useState(true);

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
        setLoadingOne(true);
        const offerDatas = await fetchJobOfferWithUserID(session.user._id);
        offerDatas && setOffers(offerDatas);
        offerDatas && setCurrentOffer(offerDatas[0]._id);
        offerDatas && setIsNoneOne(false);
        setLoadingOne(false);
      }
    };
    fillDatas();
  }, []);

  useEffect(() => {
    const fillApplications = async () => {
      if (currentOffer) {
        setLoadingTwo(true);
        const applicationDatas = await fetchJobApplicationWithOfferID(
          currentOffer
        );
        applicationDatas && setApplications(applicationDatas);
        applicationDatas && setIsNoneTwo(false);
        setLoadingTwo(false);
      }
    };
    fillApplications();
  }, [currentOffer]);

  const handlePass = () => {};

  const handleSubmit = async () => {};

  return (
    <div className="mt-2 md:flex flex-row-reverse gap-4">
      <section className="w-full md:w-1/3">
        <div className="hidden md:block mt-2">
          {!loadingOne ? (
            <div>
              {isNoneOne ? (
                <div>None One</div>
              ) : (
                <div>
                  {offers.map((offer) => (
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
              )}
            </div>
          ) : (
            <div>Loading</div>
          )}
        </div>

        <div className="block text-xs md:hidden font-normal w-full">
          <button
            ref={buttonRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full py-1.5 px-3 flex justify-between items-center rounded-sm border hover:border-gray-400 text-gray-800 text-sm mb-2 font-semibold cursor-pointer">
            <span>Select Offer</span> <AiOutlineDown />
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
        {!loadingTwo ? (
          <div>
            {isNoneTwo ? (
              <div>None Two</div>
            ) : (
              <div>
                {applications.map((item) => (
                  <div key={item._id} className="mt-2">
                    <JobApplicationCard item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </section>
    </div>
  );
};

export default ClientJobApplicationListing;
