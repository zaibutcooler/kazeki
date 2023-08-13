import { JobApplicationType } from "@/database/JobApplication";

interface Props {
  item: JobApplicationType;
}

const JobApplicationCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="w-full border rounded-sm min-h-24 p-2 text-xs">
      <h1 className="text-sm font-medium">{item.title}</h1>
    </div>
  );
};

export default JobApplicationCard;
