import {
  AiOutlineFundView,
  AiOutlineForm,
  AiOutlineClockCircle,
  AiOutlineUsergroupAdd,
  AiOutlineCheckCircle, // New icon suggestion 1
  AiOutlineProject, // New icon suggestion 2
  AiOutlineSchedule, // New icon suggestion 3
  AiOutlineTool, // New icon suggestion 4
} from "react-icons/ai";

export const jobSeekingLinks = [
  {
    name: "Job Listings",
    go: "/home/job-seeking/",
    icon: <AiOutlineFundView />,
  },
  {
    name: "Applied Jobs",
    go: "/home/job-seeking/applied",
    icon: <AiOutlineForm />,
  },
  {
    name: "Interviews",
    go: "/home/job-seeking/interview",
    icon: <AiOutlineClockCircle />,
  },
  {
    name: "Resources",
    go: "/home/job-seeking/resources",
    icon: <AiOutlineUsergroupAdd />,
  },
];

export const freelanceLinks = [
  {
    name: "Freelance Projects",
    go: "/home/freelance/",
    icon: <AiOutlineFundView />,
  },
  {
    name: "Applied Projects",
    go: "/home/freelance/applied",
    icon: <AiOutlineForm />,
  },
  {
    name: "Contracts",
    go: "/home/freelance/contracts",
    icon: <AiOutlineClockCircle />,
  },
  {
    name: "Appointments",
    go: "/home/freelance/appointments",
    icon: <AiOutlineUsergroupAdd />,
  },
  {
    name: "Completed Projects",
    go: "/home/freelance/completed",
    icon: <AiOutlineCheckCircle />,
  },
  {
    name: "Ongoing Projects",
    go: "/home/freelance/ongoing",
    icon: <AiOutlineProject />,
  },
];
