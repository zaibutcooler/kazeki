import {
  FreelanceOfferCreateType,
  FreelanceOfferType,
} from "@/database/FreelanceOffer";

const createFreelanceOffer = async ({
  user,
  title,
  description,
  requirements,
  responsibilities,
  salary,
  field,
  projectDeadline,
  applicationLimit,
  recruitCount,
  contact,
  deadline,
}: FreelanceOfferCreateType) => {
  const postBody = {
    user,
    title,
    description,
    requirements,
    responsibilities,
    salary,
    field,
    projectDeadline,
    applicationLimit,
    recruitCount,
    contact,
    deadline,
  };

  try {
    const response = await fetch("/api/freelance/offer", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas = await response.json();
      return datas as FreelanceOfferType;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default createFreelanceOffer;
