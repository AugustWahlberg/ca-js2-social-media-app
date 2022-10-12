

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
    banner.innerHTML = ` 
        
        <div class="card col-12 bg-secondary" id="cardBanner">
  <div class="row g-0">
    <div class="col-5">
      <img
        src="${examplePhoto}"
        alt="Profile photo"
        class="img-fluid rounded-start"
      />
    </div>

    <div class="col">
      <div class="card-body">
        <h5 class="card-title"><b>@${name}</b></h5>
        <div class="col-md-8">
        <i class="bi bi-sticky-fill text-primary"></i>
          <p class="card-text d-inline text-muted"">${numOnPosts} posts</p>
          </div>
          <div class="col">
          <i class="bi bi-file-person-fill text-primary"></i>
          <p class="card-text d-inline text-muted">${following} following</p>
          </div>
          
          <div class="col">
          <i class="bi bi-file-person text-primary"></i>
          <p class="card-text d-inline text-muted"">${followers} followers</p>
          </div>
    
          <div class="col-8 p-2 pt-4">
          <button type="button" onclick="location.href='/profile'"  class="btn btn-dark col-10 me-2 d-block" id="goToProfile">Profile</button>
      </div>
    </div>
  `;
    }
    
    export function renderProfileTemplate(profileData){
      bannerTemplate(profileData)
    }

   


        