"use client";
import { ProfileType } from "@/database/UserProfile";
import { useSession } from "next-auth/react";
import Link from "next/link";

const JobHeaderCard = () => {
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;

  return (
    <div className="bg-white mb-4 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-slate800">
          {profile && profile.client
            ? "Welcome back, Client!"
            : "Welcome back, Seeker!"}
        </h1>

        {profile && profile.client && (
          <Link
            href="/client/job-offer"
            className="bg-slate800 text-white px-4 py-2 rounded-md font-medium hover:bg-slate700">
            Post a Job
          </Link>
        )}
      </div>
    </div>
  );
};

export default JobHeaderCard;
