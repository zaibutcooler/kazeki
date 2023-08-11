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

export const fetchFreelanceApplicationWithID = async (id: string) => {
  // need to fix
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
