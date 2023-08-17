"use client";
import { ProfileType } from "@/database/UserProfile";
import { useSession } from "next-auth/react";
import Link from "next/link";

const JobHeaderCard = () => {
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;

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
              <div className="flex gap-6 w-full text-sm">
                <button className="w-full px-4 py-2 rounded-full border">
                  Start Posting Your Job Offer ...
                </button>
                <button className="w-auto py-2 border px-4 rounded-md">
                  Applications
                </button>
              </div>
            ) : (
              <div></div>
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
