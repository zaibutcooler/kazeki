import {
  FreelanceApplicationCreateType,
  FreelanceApplicationType,
} from "@/database/FreelanceApplication";

const createFreelanceApplication = async ({
  user,
  title,
  description,
  cv,
  negoSalary,
  freelance,
  links,
}: FreelanceApplicationCreateType) => {
  const postBody = {
    user,
    title,
    description,
    cv,
    negoSalary,
    freelance,
    links,
  };

  try {
    const response = await fetch("/api/freelance/application", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      const data: FreelanceApplicationType = await response.json();
      return data;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default createFreelanceApplication;
