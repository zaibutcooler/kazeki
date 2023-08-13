import { RootState } from "@/store";
import { useSelector } from "react-redux";
import JobApplicationForm from "../job-seeker/JobApplicationForm";
import FreelanceApplicationForm from "../freelancer/FreelanceApplicationForm";

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
        return null;
      case "freelanceReply":
        return null;
      default:
        return null;
    }
  };

  return <div>{displayBox()}</div>;
};

export default Box;
