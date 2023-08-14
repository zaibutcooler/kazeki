import { JobApplicationType } from "@/database/JobApplication";

export const fetchJobRepliesWithApplication = async (idArray: string[]) => {
  try {
    const response = await fetch(`/api/job-seeking/reply/array`, {
      method: "POST",
      body: JSON.stringify({ idArray, type: "job" }),
    });
    if (response.ok) {
      const datas: JobApplicationType[] = await response.json();
      const results = await datas.slice().reverse();
      return results;
    }
  } catch (err) {
    console.log("error", err);
  }
};
