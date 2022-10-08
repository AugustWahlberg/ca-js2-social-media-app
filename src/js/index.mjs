/*const loginbtn = document.querySelector("#loginbtn")
loginbtn.addEventListener("click", event =>{
  event.preventDefault()
  location.href = "/profile/login";
})

const signInButtun = document.querySelector("#signin-btn")
signInButtun.addEventListener("click", event =>{
  event.preventDefault()
  location.href = "/profile/register";
})
*/


import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
//import * as templates from "./templates/index.mjs"
//import * as postMethods from "./api/posts/index.mjs"
//import { renderPostTemplates } from "./template/post.mjs";


const path = location.pathname;

if (path === '/profile/login/') {
  setLoginFormListener()
} else if (path === '/profile/register/') {
  setRegisterFormListener()
}

/*
post.createPost()
post.updatePost()
post.removePost()
post.getPost() 
post.getPosts().then(console.log)
*/

/*
async function testTemplate (){
  const posts = await postMethods.getPosts();
  const post = posts[1];
  const container = document.querySelector("#post")
  renderPostTemplates(post, container)
}

testTemplate()

*/