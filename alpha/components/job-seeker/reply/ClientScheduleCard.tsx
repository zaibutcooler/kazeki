import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import {
  fetchJobApplication,
  fetchJobApplicationWithOfferID,
  fetchJobApplicationWithReplyOfferID,
} from "@/utils/fetch/fetchJobApplications";
import React, { useEffect, useState } from "react";

interface Props {
  offer: JobOfferType;
}

const ClientScheduleCard: React.FC<Props> = ({ offer }) => {
  const [replies, setReplies] = useState<ReplyType[]>([]);

  useEffect(() => {
    const fillDatas = async () => {
      const replyDatas = await fetchJobApplicationWithReplyOfferID(offer._id);
      replyDatas && setReplies(replyDatas.map((item) => item.reply));
      replyDatas && console.log(replyDatas);
    };
    fillDatas();
  }, []);
  // console.log("rpl", replies);
  return (
    <div className="mb-4 p-3 border rounded-sm">
      <main className="font-semibold mb-3">{offer.title}</main>
      <section>
        {replies && replies.map((item, index) => <div key={index}>fuck</div>)}
      </section>
    </div>
  );
};

export default ClientScheduleCard;
