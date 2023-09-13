import { FreelanceApplicationType } from "@/database/FreelanceApplication";

export const fetchFreelanceApplication = async () => {
  try {
    const response = await fetch(`/api/freelance/application`);
    if (response.ok) {
      const datas: FreelanceApplicationType[] = await response.json();
      return datas;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchFreelanceApplicationWithUserID = async (userID: string) => {
  // need to fix
  try {
    const response = await fetch(`/api/freelance/application?userID=${userID}`);
    if (response.ok) {
      const datas: FreelanceApplicationType[] = await response.json();
      const results = await datas.slice().reverse();
      return results;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchFreelanceApplicationWithOfferID = async (offerID: string) => {
  // need to fix
  try {
    const response = await fetch(
      `/api/freelance/application?offerID=${offerID}`
    );
    if (response.ok) {
      const datas: FreelanceApplicationType[] = await response.json();
      const results = await datas.slice().reverse();
      return results;
    }
  } catch (err) {
    console.log("error", err);
  }
};
