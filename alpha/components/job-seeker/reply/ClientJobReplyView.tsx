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

  return (
    <div className="w-full mt-3">
      {offers &&
        offers.map((item) => (
          <div key={item._id} className="w-full p-4 border rounded-sm mb-3">
            <main className="w-full ">
              <h1 className="font-medium">{item.title}</h1>
              <div className="">
                {applications &&
                  applications.map((application) => (
                    <div>
                      {application.job === item._id && (
                        <div className="p-3 border rounded-sm">hi</div>
                      )}
                    </div>
                  ))}
              </div>
            </main>
          </div>
        ))}
    </div>
  );
};

export default ClientJobReplyView;
