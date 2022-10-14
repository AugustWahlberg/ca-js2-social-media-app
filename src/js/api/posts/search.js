import { getPosts } from "./read.mjs";

export function searchPosts(posts) {
    const search = document.querySelector("#search");

    search.onkeyup = function (event) {
         //console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredPosts = posts.filter(function (post) {
            if (post.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        getPosts(filteredPosts);
    };
}
