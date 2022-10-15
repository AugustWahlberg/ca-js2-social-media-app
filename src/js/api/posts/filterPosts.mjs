const filterSelect = document.querySelector("#filterSelect");
import * as templates from "../../templates/index.mjs"

export function filterPosts(posts) {
  filterSelect.addEventListener("change", (e) => {
      
    if (e.target.value === "newest") {
      const filteredPosts = posts.filter((post) => {
        return (
          Math.abs(new Date(post.created).getDay() - new Date().getDay()) === 0
        );
      });
      const sortedPosts = filteredPosts.sort((a,b)=> new Date(b.created) - new Date(a.created))
      const container = document.querySelector("#postfeed");
      container.innerHTML = ""
      templates.renderPostTemplates(sortedPosts, container)
    } else if(e.target.value === "oldest") {
      const filteredPosts = posts.filter((post) => {
        return (
          Math.abs(new Date(post.created).getDay() - new Date().getDay()) > 0
        );
      });
      const sortedPosts = filteredPosts.sort((a,b)=> new Date(b.created) - new Date(a.created))
      const container = document.querySelector("#postfeed");
      container.innerHTML = ""
      templates.renderPostTemplates(sortedPosts, container)
    }
   else{
        const container = document.querySelector("#postfeed");
        container.innerHTML = ""
        templates.renderPostTemplates(posts, container)
      }
  });
}
