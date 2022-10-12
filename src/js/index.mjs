
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
//import { searchPosts } from "./api/posts/search.js";
import { getProfileBanner } from "./api/user/index.mjs";



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
    console.log(posts)
    const container = document.querySelector("#postfeed")
    templates.renderPostTemplates(posts, container)
    //searchPosts(posts);
  }

 viewPosts()



 async function viewBanner (){
  const profile = await getProfileBanner();
  console.log(profile)
  const feed = document.querySelector("#bannerID")
  templates.renderProfileTemplate(profile, feed)
}

viewBanner()


//  async function viewUserPosts (){
//    const userPosts = await postMethods.getPostsUser();
//    console.log(userPosts)
//    const container = document.querySelector("#userPostsFeed")
//    templates.renderPostTemplates(userPosts, container)
//    //searchPosts(posts);
//  }

// //  viewUserPosts()






//postMethods.getPost(3781).then(console.log);

//Denne funker

/*
createPost({
  title: "My third post",
  body: "Happy sunday "
}) */

// Denne funker også

/*
updatePost({
  id: 3780,
  title: "My second post updated",
  body: "Happy sunday updated "
}) */

//post.getPost(3781).then(console.log);
//post.getPosts().then(console.log);
//post.updatePost(3781);
//post.removePost(3780);
//post.createPost();