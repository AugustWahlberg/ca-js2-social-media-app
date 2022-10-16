/**
 * Updating a post if the update post form is submitted
 */

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault ()
    const form = e.target;
    const formData = new FormData (form);
    const post = Object.fromEntries(formData.entries())
    //Send it to the API
    updatePost(post);
    alert ("The post was updated")
  })
}
