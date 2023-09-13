"use client";

import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import { fetchFreelanceApplicationWithUserID } from "@/utils/fetch/fetchFreelanceApplications";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import FreelanceApplicationCard from "./FreelanceApplicationCard";

const AppliedFreelanceListing = () => {
  const [applications, setApplications] = useState<FreelanceApplicationType[]>(
    []
  );
  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const applicationDatas = await fetchFreelanceApplicationWithUserID(
          session.user._id
        );
        applicationDatas && setApplications(applicationDatas);
      }
    };
    fillDatas();
  }, []);

  return (
    <div className="mt-3">
      {applications &&
        applications.map((item) => (
          <div key={item._id} className="flex flex-col md:flex-row mb-3">
            <FreelanceApplicationCard item={item} />
          </div>
        ))}
    </div>
  );
};

export default AppliedFreelanceListing;
