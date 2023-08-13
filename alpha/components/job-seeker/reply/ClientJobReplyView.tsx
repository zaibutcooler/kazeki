import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import { fetchJobOfferWithUserID } from "@/utils/fetch/fetchJobOffers";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ClientJobReplyView = () => {
  const { data: session } = useSession();

  const [offers, setOffers] = useState<JobOfferType[]>([]);
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

  return (
    <div className="flex w-full bg-gray-500">
      {offers &&
        offers.map((item) => (
          <div key={item._id} className="w-full">
            <main className="w-full">
              <h1>{item.title}</h1>
            </main>
          </div>
        ))}
    </div>
  );
};

export default ClientJobReplyView;
