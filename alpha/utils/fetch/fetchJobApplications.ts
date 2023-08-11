import { JobApplicationType } from "@/database/JobApplication";

export const fetchJobApplication = async () => {
  try {
    const response = await fetch(`/api/job-seeking/application`);
    if (response.ok) {
      const datas: JobApplicationType[] = await response.json();
      return datas;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchJobApplicationWithID = async (userID: string) => {
  // need to fix
  try {
    const response = await fetch(`/api/job-seeking/application`);
    if (response.ok) {
      const datas: JobApplicationType[] = await response.json();
      return datas;
    }
  } catch (err) {
    console.log("error", err);
  }
};
