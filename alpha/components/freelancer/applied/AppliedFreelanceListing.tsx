"use client";

import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import { fetchFreelanceApplicationWithUserID } from "@/utils/fetch/fetchFreelanceApplications";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
    <div>
      {applications && applications.map((item) => <div>{item.title}</div>)}
    </div>
  );
};

export default AppliedFreelanceListing;
