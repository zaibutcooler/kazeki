"use client";

import { JobApplicationType } from "@/database/JobApplication";
import { fetchJobApplicationWithUserID } from "@/utils/fetch/fetchJobApplications";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import JobApplicationCard from "./JobApplicationCard";
import ApplicationLoadingOne from "@/components/loadings/ApplicationLoadingOne";
import ApplicationLoadingTwo from "@/components/loadings/ApplicationLoadingTwo";

const AppliedJobsListing = () => {
  const [applications, setApplications] = useState<JobApplicationType[]>([]);
  const { data: session } = useSession();

  const [loading, setLoading] = useState(true);
  const [isNone, setIsNone] = useState(true);

  useEffect(() => {
    const fillDatas = async () => {
      setLoading(true);
      if (session?.user) {
        const applicationDatas = await fetchJobApplicationWithUserID(
          session.user._id
        );
        applicationDatas && setApplications(applicationDatas);
        applicationDatas && setIsNone(false);
        applicationDatas && console.log("dt", applicationDatas);
        setLoading(false);
      }
    };
    fillDatas();
  }, []);

  return (
    <div className="mt-3">
      {!loading ? (
        <div>
          {isNone ? (
            <div>None</div>
          ) : (
            <div>
              {applications.map((item) => (
                <div key={item._id} className="flex flex-col md:flex-row mb-3">
                  <JobApplicationCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <ApplicationLoadingTwo />
        </div>
      )}
    </div>
  );
};

export default AppliedJobsListing;
