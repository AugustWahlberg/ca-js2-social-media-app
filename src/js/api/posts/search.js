import * as templates from "../../templates/index.mjs"

export function searchPosts(posts) {
    const search = document.querySelector("#search");
    //console.log(search.value);
    search.onkeyup = function (event) {
        // console.log(event,posts);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredPosts = posts.filter((post) =>{
            return post.title.toLowerCase().startsWith(searchValue) || post.author.name.toLowerCase().startsWith(searchValue)
        }
           
    );
    const container = document.querySelector("#postfeed");
    container.innerHTML = ""
    templates.renderPostTemplates(filteredPosts, container)
    }};