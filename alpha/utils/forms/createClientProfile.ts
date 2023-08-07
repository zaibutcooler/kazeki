import { ProfileType, ClientCreateType } from "@/database/UserProfile";

const createClientProfile = async ({
  user,
  firstName,
  lastName,
  country,
  city,
  email,
  phoneNumber,
  client,
  company,
  industry,
  links,
}: ClientCreateType) => {
  const postBody = {
    user,
    firstName,
    lastName,
    country,
    city,
    email,
    phoneNumber,
    client,
    company,
    industry,
    links,
  };

  try {
    const response = await fetch("/api/user/profile/client", {
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

export default createClientProfile;
