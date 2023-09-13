'use client'
import { ProfileType } from "@/database/UserProfile";
import { useSession } from "next-auth/react";
import ClientOngoingPage from "./ClientOngoingPage";
import SeekerOngoingPage from "./SeekerOngoingPage";

const MainOngointPage = () => {
  const { data: session } = useSession();
  if (!session?.user) {
    return null;
  }

  const profile = session.user.userProfile as ProfileType;

  return (
    <div>
      {profile.client ? (
        <div>
          <ClientOngoingPage />
        </div>
      ) : (
        <div>
          <SeekerOngoingPage />
        </div>
      )}
    </div>
  );
};

export default MainOngointPage;
