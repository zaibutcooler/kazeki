"use client";

import { useSession } from "next-auth/react";
import AppliedJobsListing from "./AppliedJobsListing";
import { ProfileType } from "@/database/UserProfile";
import ClientJobApplicationListing from "./ClientJobApplicatonListing";

const MainJobAppliedPage = () => {
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;

  return (
    <div>
      {session?.user && (
        <main>
          {profile.client ? (
            <ClientJobApplicationListing />
          ) : (
            <AppliedJobsListing />
          )}
        </main>
      )}
    </div>
  );
};

export default MainJobAppliedPage;
