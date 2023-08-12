"use client";

import { JobApplicationType } from "@/database/JobApplication";
import { fetchJobApplicationWithUserID } from "@/utils/fetch/fetchJobApplications";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
      }
    };
    fillDatas();
  }, []);

  return (
    <div>
      {applications && applications.map((item) => <div>{item.title}</div>)}
    </div>
  );
};

export default AppliedJobsListing;
