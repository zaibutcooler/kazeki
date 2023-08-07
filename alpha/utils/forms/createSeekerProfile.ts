import { ProfileType, SeekerCreateType } from "@/database/UserProfile";

const createSeekerProfile = async ({
  user,
  firstName,
  lastName,
  country,
  city,
  email,
  phoneNumber,
  client,
  industry,
  collage,
  pastJobs,
  links,
}: SeekerCreateType) => {
  const postBody = {
    user,
    firstName,
    lastName,
    country,
    city,
    email,
    phoneNumber,
    client,
    industry,
    collage,
    pastJobs,
    links,
  };

  try {
    const response = await fetch("/api/user/profile/seeker", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas: ProfileType = await response.json();
      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default createSeekerProfile;
