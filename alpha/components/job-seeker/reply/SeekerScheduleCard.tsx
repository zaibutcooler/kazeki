import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import { fetchJobOfferWithID } from "@/utils/fetch/fetchJobOffers";
import React, { useEffect, useState } from "react";

interface Props {
  application: JobApplicationType;
  reply: ReplyType;
}

const SeekerScheduleCard: React.FC<Props> = ({ application, reply }) => {
  let offer = application.job as JobOfferType;

  return (
    <div>
      {offer && (
        <div>
          <main>{offer.title}</main>
          <section>{reply.title}</section>
        </div>
      )}
    </div>
  );
};

export default SeekerScheduleCard;
