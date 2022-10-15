/**
 * Function to display only a single post
 * from all the posts in the API
 * @param {object} postData 
 */

function displaySinglePost(postData) {
  const banner = document.querySelector("#bannerID");
  const createPost = document.querySelector("#createPost");
  banner.style.display = "none";
  createPost.style.display = "none";
  const container = document.querySelector("#postfeed");
  container.innerHTML = "";
  container.append(postTemplate(postData, "single"))
}
/**
 * Function that create a post template
 * @param {object} postData 
 * @param {string} type 
 * @returns 
 */
export function postTemplate(postData, type) {
  const post = document.createElement("div");
  const id = postData.id;
  const avatar = postData.author.avatar;
  const name = postData.author.name;
  const body = postData.body;
  const title = postData.title;
  const tags = postData.tags;
  const reactions = postData._count.reactions;
  const comments = postData._count.comments;
  const created = postData.created;
  const examplePhoto =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

  post.classList.add("post");
  post.setAttribute("id", id);

  if (type === "multiple") {
    post.addEventListener("click", (e) => {
      displaySinglePost(postData);
    });
  }


  post.innerHTML = `<div class="row justify-content-center">
  <div class="col-12 col-md-8 col-lg-6 col-xl-5 min-mx-post">
<div class="card border-success mb-3 bg-torquise text-info">
  <div class="card-header border-success">
    <img src="${avatar}${examplePhoto}" class="img-thumbnail-post" alt="Profile picture micro">
    <div class=" ps-2 pt-2 d-inline"> <em><b>${name}</b> </em> <p class="d-inline position-absolute mt-4 top-0 pe-3 end-0 h6"> ${created} </p></div> 
  </div>
  <div class="card-body text-success">
      <h5> ${title} </h5>
    <p class="card-text text-primary">${body}</p>
  </div>
  <div class="card-footer bg-transparent border-success position-relative">
    <p class="d-inline">#${tags}</p> 
    <div class="d-inline position-absolute end-0 pe-3">
    <i class="bi bi-heart ps-3"></i> 
    <p class="d-inline">${reactions}</p> 
    <i class="bi bi-chat-left ps-3"></i>
    <p class="d-inline">${comments}</p>
  </div>
</div>
</div>
</div>
</div>
</div>
`;
  return post;
}

/**
 * Function to render only one post
 * @param {object} postData 
 * @param {const} parent 
 */

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData, "multiple"));
}

/**
 * Function to render only the users post
 * @param {object} postDataList 
 * @param {const} parent 
 */

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map((item) => postTemplate(item, "multiple")));
  console.log();
}

/**
 * Function that create a template for the user post 
 * @param {object} userPostData 
 * @returns post
 */

export function UserPostsTemplate(userPostData) {
  console.log(userPostData);
  const post = document.createElement("div");
  const id = userPostData.id;
  // const avatar = userPostData.avatar;
  const name = userPostData.owner;
  const body = userPostData.body;
  const title = userPostData.title;
  const tags = userPostData.tags;
  const reactions = userPostData?._count?.reactions
    ? userPostData?._count?.reaction
    : 0;
  const comments = userPostData?._count?.comments
    ? userPostData?._count?.comments
    : 0;
  const created = userPostData.created;
  // const examplePhoto =
  //   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

  post.classList.add("post");
  post.setAttribute("id", id);

  post.innerHTML = ` 
  <div class="row justify-content-center">
  
 
    <div class="col-12 col-md-8 col-lg-6 col-xl-5 min-mx-post">
  <div class="card border-success mb-3 bg-torquise text-info">
    <div class="card-header border-success">
   
      <div class=" ps-2 pt-2 d-inline"> <em><b>${name}</b> </em> <p class="d-inline position-absolute mt-4 top-0 pe-3 end-0 h6"> ${created} </p></div> 
    </div>
    <div class="card-body text-success">
    <h5> ${title} </h5>
      <p class="card-text text-primary">${body}</p>
    </div>
    <div class="card-footer bg-transparent border-success position-relative">
      <p class="d-inline">#${tags}</p> 
      <div class="d-inline position-absolute end-0 pe-3">
      <i class="bi bi-heart ps-3"></i> 
      <p class="d-inline">${reactions}</p> 
      <i class="bi bi-chat-left ps-3"></i>
      <p class="d-inline">${comments}</p>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  `

  // deleteButton.innerHTML = `Delete`
  // post.append(deleteButton)
  ;

  return post;
}


/**
 * Function to render only the users post
 * @param {object} userPostDataList 
 * @param {const} parent 
 */
export function renderPostUserTemplates(userPostDataList, parent) {
  parent.append(...userPostDataList.map(UserPostsTemplate));
  console.log();
}