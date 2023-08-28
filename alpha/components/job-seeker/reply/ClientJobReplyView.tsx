import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import { fetchJobApplicationWithOfferID } from "@/utils/fetch/fetchJobApplications";
import { fetchJobOfferWithUserID } from "@/utils/fetch/fetchJobOffers";
import { fetchJobRepliesWithApplication } from "@/utils/fetch/fetchJobReplies";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ClientScheduleCard from "./ClientScheduleCard";

const ClientJobReplyView = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [isNone, setIsNone] = useState(true);

  const [offers, setOffers] = useState<JobOfferType[]>([]);
  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        setIsLoading(true);
        const offerDatas = await fetchJobOfferWithUserID(session.user._id);
        offerDatas && (await setOffers(offerDatas));
        offerDatas && setIsNone(false);
        setIsLoading(false);
      }
    };

    fillDatas();
  }, []);

  // useEffect(() => {
  //   const fillReplies = async () => {
  //     const offerIds = offers && offers.map((offer) => offer._id);
  //     console.log("oid", offerIds);
  //     const applicationDatas = await fetchJobRepliesWithApplication(offerIds);

  //     applicationDatas && setApplications(applicationDatas);
  //     console.log("apl", applicationDatas);
  //   };
  //   if (offers) fillReplies();
  // }, [offers]);

  return (
    <div className="w-full mt-3">
      {!isLoading ? (
        <div>
          {isNone ? (
            <div>None</div>
          ) : (
            <div>
              {offers.map((item, index) => (
                <div key={index}>
                  <ClientScheduleCard offer={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ClientJobReplyView;
