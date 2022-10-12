import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const posts = "/posts";
const allPostData = "/?_author=true&_comments=true&_reactions=true"

export async function getPosts() {
  const allPostsURL = `${API_SOCIAL_URL}${posts}${allPostData}`
  const response = await authFetch (allPostsURL)
  return await response.json();
}

export async function getPost(id) {

  if (!id){
    throw new Error("Get requires a postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${posts}/${id}`;
  const response = await authFetch (getPostURL)
  return await response.json();
}

const profiles = "/profiles/";
const userPosts= "?_posts=true&_following=true&_followers=true"


 export async function getPostsUser() {
   const profileData = JSON.parse(localStorage.getItem('profile'));
   const name = profileData.name;
   const usersPostURL = `${API_SOCIAL_URL}${profiles}${name}${userPosts}`
   const response = await authFetch (usersPostURL)
   return await response.json();
 }