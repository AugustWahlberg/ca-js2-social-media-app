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


import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs"


//import * as templates from "./templates/index.mjs"
//import * as postMethods from "./api/posts/index.mjs"
//import { renderPostTemplates } from "./template/post.mjs";


if (path === '/profile/login/') {
  setLoginFormListener()
} else if (path === '/profile/register/') {
  setRegisterFormListener()
}

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




/*
async function testTemplate (){
  const posts = await postMethods.getPosts();
  const post = posts[1];
  const container = document.querySelector("#post")
  renderPostTemplates(post, container)
}

testTemplate()
*/
