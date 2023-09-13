import { JobOfferType } from "@/database/JobOffer";

export const fetchJobOffer = async () => {
  try {
    const response = await fetch(`/api/job-seeking/offer?option=main`);
    const datas = await response.json();
    if (response.ok) {
      const result: JobOfferType[] = await datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchJobOfferWithUserID = async (userID: string) => {
  try {
    const response = await fetch(`/api/job-seeking/offer?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: JobOfferType[] = await datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchJobOfferWithID = async (id: string) => {
  try {
    const response = await fetch(`/api/job-seeking/offer?id=${id}`);
    const result = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};
