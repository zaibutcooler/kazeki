// import { JobApplication } from "@/models/JobApplication";

import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import {
  JobApplicationCreateType,
  JobApplicationType,
} from "@/database/JobApplication";

const createJobApplication = async ({
  user,
  title,
  description,
  cv,
  links,
  job,
}: JobApplicationCreateType) => {
  const postBody = {
    user,
    title,
    description,
    cv,
    links,
    job,
  };

  try {
    const response = await fetch("/api/job-seeking/application", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      const data: JobApplicationType = await response.json();
      return data;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default createJobApplication;
