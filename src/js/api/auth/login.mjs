import { API_SOCIAL_URL } from "../constants.mjs"
import * as storage from "../../storage/index.mjs"

const action = "/auth/login";
const method = "post";

/**
 * Function to log in a user
 * @param {object} profile 
 */
export async function login(profile){
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);
  
  const response = await fetch (loginURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  })
  
  const{ accessToken, ...user} = await response.json();
  storage.save("token", accessToken);
  storage.save("profile", user);

  if (!user.message) {
    location.href = "/feed";
  }

  else if (user.message){
    alert (user.message)
  }
  }