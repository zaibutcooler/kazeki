"use client";

import { JobApplicationType } from "@/database/JobApplication";
import { ProfileType } from "@/database/UserProfile";
import { fetchJobApplicationWithUserID } from "@/utils/fetch/fetchJobApplications";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import JobApplicationCard from "./JobApplicationCard";

const AppliedJobsListing = () => {
  const [applications, setApplications] = useState<JobApplicationType[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const applicationDatas = await fetchJobApplicationWithUserID(
          session.user._id
        );
        applicationDatas && setApplications(applicationDatas);
        applicationDatas && console.log("ad", applicationDatas);
      }
    };
    fillDatas();
  }, []);

  return (
    <div className="mt-3">
      {applications &&
        applications.map((item) => (
          <div key={item._id} className="flex flex-col md:flex-row">
            <JobApplicationCard item={item} />
          </div>
        ))}
    </div>
  );
};

export default AppliedJobsListing;
