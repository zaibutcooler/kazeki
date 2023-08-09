"use client";
import { useEffect, useState } from "react";
import MainDetail from "./MainDetail";
import { ProfileType } from "@/database/UserProfile";
import { fetchProfile } from "@/utils/fetch/fetchProfile";
import { useSession } from "next-auth/react";

const MyDetail = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  const { data: session } = useSession();

  useEffect(() => {
    const userProfile = session?.user.userProfile as ProfileType;
    const fillDatas = async () => {
      const profileDatas = userProfile && (await fetchProfile(userProfile._id));
      profileDatas && setProfile(profileDatas);
      console.log("success", profile);
    };
    fillDatas();
  }, []);

  return (
    <div className="w-full h-full">
      {profile && <MainDetail profile={profile} />}
    </div>
  );
};

export default MyDetail;
