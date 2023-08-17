import { JobApplicationType } from "@/database/JobApplication";

export const fetchJobRepliesWithApplication = async (idArray: string[]) => {
  try {
    const response = await fetch(`/api/job-seeking/reply/array`, {
      method: "POST",
      body: JSON.stringify({ idArray, type: "job" }),
    });
    if (response.ok) {
      const datas: JobApplicationType[] = await response.json();
      console.log("dt", datas);
      const results = await datas.slice().reverse();

      return results;
    }
  } catch (err) {
    console.log("error", err);
  }
};
export const fetchJobRepliesWithID = async (id: string) => {
  try {
    const response = await fetch(`/api/job-seeking/reply?id=${id}`);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};
