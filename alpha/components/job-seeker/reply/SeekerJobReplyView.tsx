import { JobApplicationType } from "@/database/JobApplication";
import { fetchApprovedJobApplicationWithUserID } from "@/utils/fetch/fetchJobApplications";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SeekerScheduleCard from "./SeekerScheduleCard";

const SeekerJobReplyView = () => {
  const [applications, setApplications] = useState<JobApplicationType[] | null>(
    null
  );

  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const applicationDatas = await fetchApprovedJobApplicationWithUserID(
          session.user._id
        );
        applicationDatas && setApplications(applicationDatas);
        console.log("fd", applicationDatas);
      }
    };
    fillDatas();
  }, [session?.user]);

  return (
    <div>
      {applications && (
        <div className="">
          {applications.map((item) => (
            <main key={item._id} className="">
              <SeekerScheduleCard application={item} />
            </main>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeekerJobReplyView;
