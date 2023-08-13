import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import {
  JobApplicationCreateType,
  JobApplicationType,
} from "@/database/JobApplication";
import { ReplyCreateType, ReplyType } from "@/database/Reply";

export const createJobReply = async ({
  user,
  title,
  description,
  appointment,
  links,
  itemID,
}: ReplyCreateType) => {
  const postBody = {
    user,
    title,
    description,
    appointment,
    links,
    itemID,
  };

  try {
    const response = await fetch("/api/freelance/reply", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      const data: ReplyType = await response.json();
      return data;
    }
  } catch (err) {
    console.log("error", err);
  }
};
