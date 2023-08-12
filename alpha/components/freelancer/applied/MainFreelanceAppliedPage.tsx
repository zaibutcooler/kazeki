"use client";

import { useSession } from "next-auth/react";

import { ProfileType } from "@/database/UserProfile";
import ClientFreelanceApplicationListing from "./ClientFreelanceApplicationListing";
import AppliedFreelanceListing from "./AppliedFreelanceListing";

const MainFreelanceAppliedPage = () => {
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;

  return (
    <div>
      {session?.user && (
        <main>
          {profile.client ? (
            <ClientFreelanceApplicationListing />
          ) : (
            <AppliedFreelanceListing />
          )}
        </main>
      )}
    </div>
  );
};

export default MainFreelanceAppliedPage;
