"use client";
import { useEffect, useState } from "react";
import MainDetail from "./MainDetail";
import { ProfileType } from "@/database/UserProfile";

const MyDetail = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  useEffect(() => {
    const fillDatas = async () => {};
  }, []);

  return (
    <div>
      <MainDetail />
    </div>
  );
};

export default MyDetail;
