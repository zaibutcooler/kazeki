import { FreelanceOfferCreateType } from "@/models/FreelanceOffer";

const createFreelanceOffer = async ({
  user,
  title,
  detail,
  requirements,
  responsibilities,
  salary,
  field,
  timeRange,
  contact,
  formClose,
}: FreelanceOfferCreateType) => {
  const postBody = {
    user,
    title,
    detail,
    requirements,
    responsibilities,
    salary,
    field,
    timeRange,
    contact,
    formClose,
  };

  try {
    const response = await fetch("/api/job-seeking/application", {
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

export default createFreelanceOffer;
