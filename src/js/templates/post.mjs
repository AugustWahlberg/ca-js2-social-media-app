export function postTemplate(postData) {
  const post = document.createElement("div");
  const id = postData.id;
  const avatar = postData.author.avatar;
  const name = postData.author.name;
  const body = postData.body;
  const tags = postData.tags;
  const reactions = postData._count.reactions;
  const comments = postData._count.comments;
  const created = postData.created;
  const examplePhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

  post.classList.add("post");
  post.setAttribute("id", id);

  //console.log(postData.author)
  post.innerHTML = ` <div class="row justify-content-center">
  <div class="col-12 col-md-8 col-lg-6 col-xl-5 min-mx-post">
<div class="card border-success mb-3 bg-torquise text-info">
  <div class="card-header border-success">
    <img src="${avatar}${examplePhoto}" class="img-thumbnail-post" alt="Profile picture micro">
    <div class=" ps-2 pt-2 d-inline"> <em><b>${name}</b> </em> <p class="d-inline position-absolute mt-4 top-0 pe-3 end-0 h6"> ${created} </p></div> 
  </div>
  <div class="card-body text-success">
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
  //const button = document.createElement("button")
  //post.append(button)
  
  //button.addEventListener("click", () => console.log(postData))
  return post;
  }
  
  export function renderPostTemplate(postData, parent){
    parent.append(postTemplate(postData))
  }
  
  export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
    console.log()
  }

  export function UserPostsTemplate(userPostData) {
    const id = userPostData.id;
    const avatar = userPostData.avatar;
    const name = userPostData.name;
    const body = userPostData.body;
    const tags = userPostData.tags;
    const reactions = userPostData._count.reactions;
    const comments = userPostData._count.comments;
    const created = userPostData.created;
    const examplePhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  
    post.classList.add("post");
    post.setAttribute("id", id);
  
    //console.log(postData.author)
    post.innerHTML = ` <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6 col-xl-5 min-mx-post">
  <div class="card border-success mb-3 bg-torquise text-info">
    <div class="card-header border-success">
      <img src="${avatar}${examplePhoto}" class="img-thumbnail-post" alt="Profile picture micro">
      <div class=" ps-2 pt-2 d-inline"> <em><b>${name}</b> </em> <p class="d-inline position-absolute mt-4 top-0 pe-3 end-0 h6"> ${created} </p></div> 
    </div>
    <div class="card-body text-success">
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
}

 export function renderPostUserTemplates(userPostDataList, parent) {
     parent.append(...userPostDataList.map(UserPostsTemplate))
     console.log()
   }


 