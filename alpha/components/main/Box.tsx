import { RootState } from "@/store";
import { useSelector } from "react-redux";
import JobApplicationForm from "../job-seeker/JobApplicationForm";
import FreelanceApplicationForm from "../freelancer/FreelanceApplicationForm";
import ReplyForm from "../job-seeker/ReplyForm";

const Box = () => {
  const currentBox = useSelector((state: RootState) => state.box.currentBox);
  const id = useSelector((state: RootState) => state.box.id);

  const displayBox = () => {
    switch (currentBox) {
      case "job":
        return <JobApplicationForm itemID={id} />;
      case "freelance":
        return <FreelanceApplicationForm itemID={id} />;
      case "jobReply":
        return <ReplyForm itemID={id} type="job" />;
      case "freelanceReply":
        return <ReplyForm itemID={id} type="freelance" />;
      default:
        return null;
    }
  };

  return <div>{displayBox()}</div>;
};

export default Box;
