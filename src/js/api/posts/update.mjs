import { API_SOCIAL_URL } from "../constants.mjs"
import { authFetch } from "../authFetch.mjs"

const action = "/posts";
const method = "put";

/**
 * Function to update a post
 * @param {object} postData 
 * @returns 
 */

export async function updatePost (postData) {

  if (!postData.id) {
    throw new Error ("Update requires a postID")
  }

  const updatePostURL =`${API_SOCIAL_URL}${action}/${postData.id}`;
  
  const response = await authFetch (updatePostURL, {
    method,
    body: JSON.stringify(postData)
  })

  const post = await response.json();
  return post;

  // fjerne de to linjene over og sette inn: return await response.json();
}