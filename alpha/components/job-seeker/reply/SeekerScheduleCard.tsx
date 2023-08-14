import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import React from "react";

interface Props {
  offer: JobOfferType;
  reply: ReplyType;
}

const SeekerScheduleCard: React.FC<Props> = ({ offer, reply }) => {
  return (
    <div>
      <main>{offer.title}</main>
      <section>{reply.title}</section>
    </div>
  );
};

export default SeekerScheduleCard;
