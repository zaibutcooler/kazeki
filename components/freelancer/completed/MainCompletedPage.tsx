"use client";
import { ProfileType } from "@/database/UserProfile";
import { useSession } from "next-auth/react";
import ClientCompletedView from "./ClientCompletedView";
import SeekerCompletedView from "./SeekerCompletedView";

const MainCompletedPage = () => {
  const { data: session } = useSession();
  if (!session?.user) {
    return null;
  }

  const profile = session.user.userProfile as ProfileType;

  return (
    <div>
      {profile.client ? (
        <div>
          <ClientCompletedView />
        </div>
      ) : (
        <div>
          <SeekerCompletedView />
        </div>
      )}
    </div>
  );
};

export default MainCompletedPage;
