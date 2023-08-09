"use client";
import { useEffect } from "react";
import MainDetail from "./MainDetail";

interface Props {
  profileID: string;
}

const OtherDetail: React.FC<Props> = ({ profileID }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <MainDetail />
    </div>
  );
};

export default OtherDetail;
