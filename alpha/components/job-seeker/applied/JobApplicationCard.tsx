import { JobApplicationType } from "@/database/JobApplication";

interface Props {
  item: JobApplicationType;
}

const JobApplicationCard: React.FC<Props> = ({ item }) => {
  return <div>{item.title}</div>;
};

export default JobApplicationCard;
