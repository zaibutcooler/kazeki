import { JobApplicationType } from "@/database/JobApplication";
import { fetchJobApplicationWithUserID } from "@/utils/fetch/fetchJobApplications";
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
        const applicationDatas = await fetchJobApplicationWithUserID(
          session.user._id
        );
        const filteredDatas = applicationDatas?.filter(
          (data) => data.approved === true
        );
        if (filteredDatas) {
          setApplications(filteredDatas);
          console.log(filteredDatas);
        }
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
              <SeekerScheduleCard offer={item} />
            </main>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeekerJobReplyView;
