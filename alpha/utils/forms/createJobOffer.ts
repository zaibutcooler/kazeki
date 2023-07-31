// import { JobApplication } from "@/models/JobApplication";

import { JobOfferCreateType } from "@/models/JobOffer";

const createJobOffer = async ({
  user,
  title,
  description,
  requirements,
  requireCount,
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
    requirements,
    requireCount,
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
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default createJobOffer;
