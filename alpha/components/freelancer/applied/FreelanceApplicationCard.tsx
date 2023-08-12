import { FreelanceApplicationType } from "@/database/FreelanceApplication";


interface Props {
  item: FreelanceApplicationType;
}

const FreelanceApplicationCard: React.FC<Props> = ({ item }) => {
  return <div>{item.title}</div>;
};

export default FreelanceApplicationCard;
