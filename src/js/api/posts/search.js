import * as templates from "../../templates/index.mjs"

/**
 * Function to search in the posts feed
 * And then displaying the posts that matches the search
 * @param {array} posts 
 */
export function searchPosts(posts) {
    const search = document.querySelector("#search");
    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredPosts = posts.filter((post) =>{
            return post.title.toLowerCase().startsWith(searchValue) || post.author.name.toLowerCase().startsWith(searchValue)
        } 
    );
    const container = document.querySelector("#postfeed");
    container.innerHTML = ""
    templates.renderPostTemplates(filteredPosts, container)
    }};