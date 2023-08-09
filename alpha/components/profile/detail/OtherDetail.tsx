"use client";
import { useEffect, useState } from "react";
import MainDetail from "./MainDetail";
import { useSession } from "next-auth/react";
import { fetchProfile } from "@/utils/fetch/fetchProfile";
import { ProfileType } from "@/database/UserProfile";

interface Props {
  profileID: string;
}

const OtherDetail: React.FC<Props> = ({ profileID }) => {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    const fillDatas = async () => {
      const profileDatas = await fetchProfile(profileID);
      profileDatas && setProfile(profileDatas);
      console.log("success", profileDatas);
    };
    fillDatas();
  }, []);

  return (
    <div className="w-full h-full">
      {profile && <MainDetail profile={profile} />}
    </div>
  );
};

export default OtherDetail;
