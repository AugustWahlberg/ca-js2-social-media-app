import {
  setRegisterFormListener,
  setLoginFormListener,
  setCreatePostFormListener,
} from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { getProfileBanner } from "./api/user/index.mjs";
import { searchPosts } from "./api/posts/search.js";
import { filterPosts } from "./api/posts/filterPosts.mjs";

const path = location.pathname;

// LOGIN and SIGNIN

if (path === "/index.html") {
  const loginbtn = document.querySelector("#loginbtn");
  loginbtn.addEventListener("click", (event) => {
    event.preventDefault();
    location.href = "/profile/login";
  });

  const signInButton = document.querySelector("#signin-btn");
  signInButton.addEventListener("click", (event) => {
    event.preventDefault();
    location.href = "/profile/register";
  });
}

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

// VIEW POSTS ON FEED

async function viewPosts() {
  const posts = await postMethods.getPosts();
  //console.log(posts)
  const container = document.querySelector("#postfeed");
  templates.renderPostTemplates(posts, container);
  searchPosts(posts);
  filterPosts(posts);
}

if (path === "/feed/") {
  viewPosts();
}

// VIEW BANNER

async function viewBanner() {
  const profile = await getProfileBanner();
  const feed = document.querySelector("#bannerID");
  templates.renderProfileTemplate(profile, feed);
}

viewBanner();

// VIEW USERS POSTS

async function viewUserPosts() {
  const user = await postMethods.getPostsUser();
  console.log(user);
  const container = document.querySelector("#profileBanner");
  templates.renderPostUserTemplates(user.posts, container);
}

if (path === "/profile/") {
  const editPost = document.querySelector("#editPost");
editPost.style.display="none"
  viewUserPosts();
}

// CREATE POST

if (path === "/feed/") {
  setCreatePostFormListener();
}