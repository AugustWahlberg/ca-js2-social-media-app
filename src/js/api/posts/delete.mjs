import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

/**
 * Function to return a post to delete
 * @param {number} id 
 * @returns post to delete
 */
export async function removePost (id) {

  if (!id) {
    throw new Error ("Delete requires a postID")
  }

  const deletePostURL =`${API_SOCIAL_URL}${action}/${id}`;
  
  const response = await authFetch (deletePostURL, {
    method
  })

  const post = await response.json();
  return post;
}