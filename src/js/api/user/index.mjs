import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const profiles = "/profiles";
const profileAllData = "?_posts=true&_following=true&_followers=true";

export async function getProfileBanner(profile) {
  const profileData = JSON.parse(localStorage.getItem('profile'));
  const name = profileData.name;
  const getFeedURL = `${API_SOCIAL_URL}${profiles}/${name}${profileAllData}`
  console.log(getFeedURL)
  const response = await authFetch (getFeedURL)
  console.log(response)
  return await response.json();
}
