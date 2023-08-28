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

  const [isLoading, setIsLoading] = useState(true);
  const [isNone, setIsNone] = useState(true);

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        setIsLoading(true);
        const applicationDatas = await fetchApprovedJobApplicationWithUserID(
          session.user._id
        );
        applicationDatas && setApplications(applicationDatas);
        applicationDatas && setIsNone(false);
        setIsLoading(false);
      }
    };
    fillDatas();
  }, [session?.user]);

  return (
    <div>
      {!isLoading ? (
        <div>
          {isNone ? (
            <div>None</div>
          ) : (
            <div>
              {applications &&
                applications.map((item) => (
                  <main key={item._id} className="">
                    <SeekerScheduleCard application={item} />
                  </main>
                ))}
            </div>
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default SeekerJobReplyView;
