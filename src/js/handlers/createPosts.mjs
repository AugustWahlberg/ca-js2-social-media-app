import { createPost } from "../api/posts/index.mjs";

const form = document.querySelector("#createPost")

export function setCreatePostFormListener () {

/**
 * Creating a post if the create post form is submitted
 */

  if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault ()
    const form = e.target;
    const formData = new FormData (form);
    const post = Object.fromEntries(formData.entries())
    //Send it to the API
    createPost(post);
    alert ("New post was created")
  })
}

}