import { API_SOCIAL_URL } from "../constants.mjs"
import { authFetch } from "../authFetch.mjs"

const action = "/posts"
const method = "post";

/**
 * Function to return a post object to create
 * @param {object} postData 
 * @returns object to create which will be sent to the API
 */
export async function createPost (postData) {
  const createPostURL = API_SOCIAL_URL + action;
 

  const response = await authFetch (createPostURL, {
    method,
    body: JSON.stringify(postData)
  })

  const post = await response.json();
 return post;
}