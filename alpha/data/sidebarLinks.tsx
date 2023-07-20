import {
  AiOutlineFundView,
  AiOutlineForm,
  AiOutlineClockCircle,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

export const jobSeekingLinks = [
  {
    name: "Job Listings",
    go: "home/job-seeking/listing",
    icon: <AiOutlineFundView />,
  },
  {
    name: "Applied Jobs",
    go: "home/job-seeking/applied",
    icon: <AiOutlineForm />,
  },
  {
    name: "Interviews",
    go: "home/job-seeking/interview",
    icon: <AiOutlineClockCircle />,
  },
  {
    name: "Resources",
    go: "home/job-seeking/resources",
    icon: <AiOutlineUsergroupAdd />,
  },
];

export const freelanceLinks = [
  {
    name: "Freelance Listings",
    go: "home/freelance/listing",
    icon: <AiOutlineFundView />,
  },
  {
    name: "Applied Projects",
    go: "home/freelance/applied",
    icon: <AiOutlineForm />,
  },
  {
    name: "Contracts",
    go: "home/freelance/contracts",
    icon: <AiOutlineClockCircle />,
  },
  {
    name: "Appointments",
    go: "home/freelance/appointments",
    icon: <AiOutlineUsergroupAdd />,
  },
];

console.log("jobSeekingLinks:", jobSeekingLinks);
console.log("freelanceLinks:", freelanceLinks);
