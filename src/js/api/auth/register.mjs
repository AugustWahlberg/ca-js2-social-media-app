import { API_SOCIAL_URL } from "../constants.mjs"

const action = "/auth/register";
const method = "post";

/**
 * Function to register a user
 * @param {object} profile 
 */

export async function register(profile){
const registerURL = API_SOCIAL_URL + action;
const body = JSON.stringify(profile);
const response = await fetch (registerURL, {
  headers: {
    "Content-Type": "application/json"
  },
  method,
  body
})

const result = await response.json();

if (!result.message) {
  alert("You have successfullt registered a user");
}

else if (result.message){
  alert (result.message)
}
}