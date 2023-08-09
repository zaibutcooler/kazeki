import { ProfileType } from "@/database/UserProfile";

export const fetchProfile = async (profileID: string) => {
  try {
    const response = await fetch(`/api/user/profile?id=${profileID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: ProfileType = await datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};
