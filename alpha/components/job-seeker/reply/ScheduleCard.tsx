import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import React from "react";

interface Props {
  offer: JobOfferType;
  reply: ReplyType | ReplyType[];
}

const ScheduleCard = () => {
  return <div>ScheduleCard</div>;
};

export default ScheduleCard;
