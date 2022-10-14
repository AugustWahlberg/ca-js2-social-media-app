
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
import { getProfileBanner } from "./api/user/index.mjs";
import { searchPosts } from "./api/posts/search.js";


const path = location.pathname;

if (path === '/index.html') {
const loginbtn = document.querySelector("#loginbtn")
loginbtn.addEventListener("click", event =>{
  event.preventDefault()
  location.href = "/profile/login";
})

const signInButton = document.querySelector("#signin-btn")
signInButton.addEventListener("click", event =>{
  event.preventDefault()
  location.href = "/profile/register";
})
}


if (path === '/profile/login/') {
  setLoginFormListener()
} else if (path === '/profile/register/') {
  setRegisterFormListener()
}

  async function viewPosts (){
    const posts = await postMethods.getPosts();
    //console.log(posts)
    const container = document.querySelector("#postfeed")
    templates.renderPostTemplates(posts, container)
    searchPosts(posts); 
  }

  
if (path === '/feed/') {
  viewPosts()
}


 async function viewBanner (){
  const profile = await getProfileBanner();
  // console.log(profile)
  const feed = document.querySelector("#bannerID")
  templates.renderProfileTemplate(profile, feed)
}

viewBanner()
