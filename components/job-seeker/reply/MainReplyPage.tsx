"use client";

import { useSession } from "next-auth/react";
import { ProfileType } from "@/database/UserProfile";
import ClientJobReplyView from "./ClientJobReplyView";
import SeekerJobReplyView from "./SeekerJobReplyView";

const MainReplyPage = () => {
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;

  return (
    <div>
      {session?.user && (
        <main>
          {profile.client ? <ClientJobReplyView /> : <SeekerJobReplyView />}
        </main>
      )}
    </div>
  );
};

export default MainReplyPage;
