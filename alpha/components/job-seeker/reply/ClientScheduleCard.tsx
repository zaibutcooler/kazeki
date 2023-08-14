import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import React from "react";

interface Props {
  offer: JobOfferType;
  replies: ReplyType[];
}

const ClientScheduleCard: React.FC<Props> = ({ offer, replies }) => {
  return (
    <div className="mb-4">
      <main className="font-semibold">{offer.title}</main>
      <section>
        {replies.map((item) => (
          <div key={item._id}>{item.title}</div>
        ))}
      </section>
    </div>
  );
};

export default ClientScheduleCard;
