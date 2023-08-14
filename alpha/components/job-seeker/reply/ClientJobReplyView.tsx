import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import { fetchJobApplicationWithOfferID } from "@/utils/fetch/fetchJobApplications";
import { fetchJobOfferWithUserID } from "@/utils/fetch/fetchJobOffers";
import { fetchJobRepliesWithApplication } from "@/utils/fetch/fetchJobReplies";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ClientJobReplyView = () => {
  const { data: session } = useSession();

  const [offers, setOffers] = useState<JobOfferType[]>([]);
  const [applications, setApplications] = useState<JobApplicationType[]>([]);
  const [replies, setReplies] = useState<ReplyType[]>([]);

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
    const fillReplies = async () => {
      if (session?.user && offers) {
        const offerIds = offers.map((offer) => offer._id);
        const applicationDatas = await fetchJobRepliesWithApplication(offerIds);

        applicationDatas && setApplications(applicationDatas);
      }
    };
    fillReplies();
  }, [offers]);

  const filteredReply = (
    application: JobApplicationType[],
    offer: JobOfferType
  ) => {
    const filteredApplication = application.filter(
      (item) => item.job === offer._id
    );
    const result = filteredApplication.map((item) => item.reply);
    return result;
  };

  return (
    <div className="w-full mt-3">
      {applications &&
        offers.map((item) => (
          <div key={item._id}>
            <ClientScheduleCard
              offer={item}
              replies={filteredReply(applications, item)}
            />
          </div>
        ))}
    </div>
  );
};

export default ClientJobReplyView;
