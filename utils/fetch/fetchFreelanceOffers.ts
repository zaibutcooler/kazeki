import { FreelanceOfferType } from "@/database/FreelanceOffer";

export const fetchFreelanceOffer = async () => {
  try {
    const response = await fetch(`/api/freelance/offer?option=main`);
    const datas = await response.json();
    if (response.ok) {
      const result: FreelanceOfferType[] = await datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchFreelanceOfferWithUserID = async (userID: string) => {
  try {
    const response = await fetch(`/api/freelance/offer?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: FreelanceOfferType[] = await datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};
