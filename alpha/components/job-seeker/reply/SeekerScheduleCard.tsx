import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { ReplyType } from "@/database/Reply";
import { fetchJobOfferWithID } from "@/utils/fetch/fetchJobOffers";
import { formatDateTime } from "@/utils/formatDate";
import React, { useEffect, useState } from "react";

interface Props {
  application: JobApplicationType;
  reply: ReplyType;
}

const SeekerScheduleCard: React.FC<Props> = ({ application, reply }) => {
  let offer = application.job as JobOfferType;

  return (
    <div className="mb-4 p-3 border rounded-sm">
      <main className="flex justify-between mb-3 items-center">
        <div className="font-semibold flex items-end gap-2">
          <span className="">{offer.title}</span>
          <span className="text-[0.7rem] font-normal mb-[3px]">
            {!offer.closed && "( Active )"}
          </span>
        </div>
        <div className="font-medium text-sm flex ">
          <button
            disabled={offer.closed}
            onClick={() => {}}
            className="py-1.5 disabled:w-20 w-16 disabled:bg-white border disabled:text-slate-800 bg-slate-800 rounded-sm text-white text-xs">
            {offer.closed ? "Closed..." : "Close"}
          </button>
        </div>
      </main>
      <section>
        <div className="text-sm p-2 mb-1 border flex items-center">
          <section className="flex md:w-1/3 w-1/2  gap-2 font-medium text-black">
            <h1 className="capitalize">Johnny</h1>
            <h1 className="capitalize">Bieber</h1>
          </section>
          <section className="hidden md:flex md:w-1/3 w-0  gap-2 font-normal text-gray-800">
            <h1>Johnny bieber @gmail.com</h1>
          </section>
          <section className="flex md:w-1/3 w-1/2  md:gap-5 gap-2 font-normal text-gray-800  text-[0.7rem] md:text-xs justify-end">
            <h1>{formatDateTime(String(reply.created)).date}</h1>
            <h1>{formatDateTime(String(reply.created)).time}</h1>
          </section>
        </div>
      </section>
      <main>
        <h1>{reply.title}</h1>
        <p>{reply.description}</p>
      </main>
    </div>
  );
};

export default SeekerScheduleCard;
