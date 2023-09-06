"use client";

import { ProfileType } from "@/database/UserProfile";
import { useSession } from "next-auth/react";
import ClientContractView from "./ClientContractView";
import SeekerContractView from "./SeekerContractView";

const MainContractPage = () => {
  const { data: session } = useSession();
  if (!session?.user) {
    return null;
  }

  const profile = session.user.userProfile as ProfileType;

  return (
    <div>
      {profile.client ? (
        <div>
          <ClientContractView />
        </div>
      ) : (
        <div>
          <SeekerContractView />
        </div>
      )}
    </div>
  );
};

export default MainContractPage;
