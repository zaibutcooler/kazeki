import { ProfileType } from "@/database/UserProfile";

export const fetchProfile = async (profileID: string) => {
  try {
    const response = await fetch(`/api/user/profile?id=${profileID}`);

    if (response.ok) {
      const datas: ProfileType = await response.json();

      return datas;
    }
  } catch (err) {
    console.log("error", err);
  }
};
