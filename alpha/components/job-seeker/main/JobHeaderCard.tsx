"use client";
import { JobOfferType } from "@/database/JobOffer";
import { ProfileType } from "@/database/UserProfile";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  handleSearch: (items: JobOfferType[]) => void;
}

const JobHeaderCard: React.FC<Props> = ({ handleSearch }) => {
  const { data: session } = useSession();
  const [query, setQuery] = useState("");
  const profile = session?.user.userProfile as ProfileType;
  const [offers, setOffers] = useState<JobOfferType[]>([]);

  useEffect(() => {
    const searchFunction = async () => {
      if (query) {
        const datas = await fetch(`/api/job-seeking/offer?search=${query}`);
        const results = await datas.json();
        results && setOffers(results);
        console.log(offers);
      }
    };
    searchFunction();
  }, [query]);

  return (
    <div className="mt-3 mb-4 p-4 rounded-md border font-medium text-slate-800 w-full">
      <div className="flex justify-between items-center w-full">
        {session?.user ? (
          <section className="w-full">
            <h1 className="text-lg mb-3">
              Welcome back{" "}
              <span className="text-black">{profile.firstName}</span> !
            </h1>
            {profile.client ? (
              <div className="flex gap-4 md:gap-6 w-full text-sm">
                <Link
                  href="/client/job-offer"
                  className="w-full px-4 py-2 rounded-full border hover:bg-slate-100 flex">
                  Start Posting{" "}
                  <span className="hidden md:block">Your Job Offer </span> ...
                </Link>
                <Link
                  href="/home/interviews"
                  className="w-40 py-2 border px-4 rounded-md flex justify-center hover:bg-slate-100">
                  <h1>My Offers</h1>
                </Link>
              </div>
            ) : (
              <div className="flex  w-full text-sm">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Via Job Title"
                  className="w-full px-4 py-2 rounded-l-full border hover:bg-slate-50 flex"
                />
                <button
                  className="w-32 py-2 rounded-r-full border bg-slate-800 text-white hover:bg-slate-600"
                  onClick={() => {
                    handleSearch(offers);
                  }}>
                  Search
                </button>
              </div>
            )}
          </section>
        ) : (
          <section>Please login first.</section>
        )}
      </div>
    </div>
  );
};

export default JobHeaderCard;
