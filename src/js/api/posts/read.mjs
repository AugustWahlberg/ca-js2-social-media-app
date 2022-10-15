import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const allPostData = "/?_author=true&_comments=true&_reactions=true"

/**
 * GET ALL POSTS
 * @returns All posts (100 default)
 */

export async function getPosts() {
  const allPostsURL = `${API_SOCIAL_URL}${action}${allPostData}`;
  const response = await authFetch (allPostsURL)
  const allPosts = await response.json()
  // console.log(allPosts)
  return allPosts;
}

const profiles = "/profiles/";
const userPosts= "?_posts=true&_following=true&_followers=true"

/**
 * GET POSTS USER LOGGED IN
 * @returns All posts from the logged in user
 */
 export async function getPostsUser() {
   const profileData = JSON.parse(localStorage.getItem('profile'));
   const name = profileData.name;
   const usersPostURL = `${API_SOCIAL_URL}${profiles}${name}${userPosts}`;
   const response = await authFetch (usersPostURL)
   return await response.json();
 }

 /**
  * GET SINGLE POST
  * @param {number} id 
  * @returns Single post
  */
export async function getPost(id) {

  if (!id){
    throw new Error("Get requires a postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id};`;
  const response = await authFetch (getPostURL)
  return await response.json();
}