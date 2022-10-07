const loginbtn = document.querySelector("#loginbtn")
loginbtn.addEventListener("click", event =>{
  event.preventDefault()
  location.href = "/profile/login";
})

const signInButtun = document.querySelector("#signin-btn")
signInButtun.addEventListener("click", event =>{
  event.preventDefault()
  location.href = "/profile/register";
})