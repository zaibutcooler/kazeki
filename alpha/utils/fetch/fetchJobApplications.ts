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

export const fetchJobApplicationWithUserID = async (userID: string) => {
  // need to fix
  try {
    const response = await fetch(
      `/api/job-seeking/application?userID=${userID}`
    );
    if (response.ok) {
      const datas: JobApplicationType[] = await response.json();
      const results = await datas.slice().reverse();
      return results;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchJobApplicationWithOfferID = async (offerID: string) => {
  // need to fix
  try {
    const response = await fetch(
      `/api/job-seeking/application?offerID=${offerID}`
    );
    if (response.ok) {
      const datas: JobApplicationType[] = await response.json();
      const results = await datas.slice().reverse();
      return results;
    }
  } catch (err) {
    console.log("error", err);
  }
};
