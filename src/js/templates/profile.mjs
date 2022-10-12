

  export function bannerTemplate(profileData) {
    
    const name = profileData.name;
    const numOnPosts = profileData._count.posts;
    const followers = profileData.followers.length;
    const following = profileData.following.length;
    const avatar = profileData.avatar;
    const examplePhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    console.log(avatar)
    const banner = document.querySelector("#profileBanner")
    
    //console.log(postData.author)
    banner.innerHTML = ` <div class="row">
    <div class="col-md-6 " id="img-feed">
      <img src="${examplePhoto}" class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col-md-6 ps-4 pt-2">
    <h4 class="p-2" id="usernane-logged-in"><b>@${name}</b></h4>
    <div class="col-4"><a href="../profile/login/">log out</a></div>
    
      <div class="col-md-8">
      <i class="bi bi-sticky-fill text-primary"></i>
        <p class="card-text d-inline text-muted"">${numOnPosts} posts</p>
        </div>
        <div class="col-md-8">
        <i class="bi bi-file-person-fill text-primary"></i>
        <p class="card-text d-inline text-muted">${following} following</p>
        </div>
        
        <div class="col-md-8">
        <i class="bi bi-file-person text-primary"></i>
        <p class="card-text d-inline text-muted"">${followers} followers</p>
        </div>
  
        <div class="row p-2 pt-4">
        <button type="button" onclick="location.href='/profile'"  class="btn btn-dark col-10 me-2 d-block" id="goToProfile">Profile</button>
        <button class="btn btn-dark col-10 mt-2" id="newQuote">New quote</button>
      
        </div>
        </div>
        </div>       
  `;
     
    }
    
    export function renderProfileTemplate(profileData){
      bannerTemplate(profileData)
    }

   