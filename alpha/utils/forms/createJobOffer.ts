// import { JobApplication } from "@/models/JobApplication";

import { JobOfferCreateType, JobOfferType } from "@/database/JobOffer";

const createJobOffer = async ({
  user,
  title,
  description,
  company,
  requirements,
  responsibilities,
  onSite,
  location,
  salary,
  allowance,
  deadline,
  contact,
}: JobOfferCreateType) => {
  const postBody = {
    user,
    title,
    description,
    company,
    requirements,
    responsibilities,
    onSite,
    location,
    salary,
    allowance,
    deadline,
    contact,
  };

  try {
    const response = await fetch("/api/job-seeking/offer", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas = await response.json();
      return datas as JobOfferType;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default createJobOffer;
