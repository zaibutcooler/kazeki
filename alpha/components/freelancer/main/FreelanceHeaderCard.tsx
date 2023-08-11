"use client";

import { ProfileType } from "@/database/UserProfile";
import { useSession } from "next-auth/react";
import Link from "next/link";

const FreelanceHeaderCard = () => {
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;

  return (
    <div className="mb-2 mt-3 w-full rounded-md border p-3">
      {profile && profile.client ? (
        <main>
          <h1>Welcome back Client!</h1>
          <Link
            href="/client/freelance-offer"
            className="px-4 py-2 font-medium rounded-md border">
            Post
          </Link>
        </main>
      ) : (
        <main>
          <h1>Welcome back Seeker!</h1>
        </main>
      )}
    </div>
  );
};

export default FreelanceHeaderCard;
