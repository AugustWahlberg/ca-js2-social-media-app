import { register } from "../api/auth/register.mjs";

  /**
   * Register function to set input from the user into an object
   * 
  */
export function setRegisterFormListener() {
 const form = document.querySelector("#registerForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
     const form = event.target;
     const formData = new FormData(form);
     const profile = Object.fromEntries(formData.entries())
     const inputPasswordError2 = document.getElementById("password-error-2");
     const termsError= document.getElementById("terms-error");
     const terms = document.getElementById('terms')

      if (profile.password != profile.passwordRepeat ) {
        inputPasswordError2.style.display = "block";
      }
    
      else {
        inputPasswordError2.style.display = "none";
      }

      if(terms.checked == true){
        termsError.style.display = "none"
      }
      
      else {
        console.log("not checked")
        termsError.style.display = "block"
      }

      if (profile.password === profile.passwordRepeat && terms.checked == true){
        // Send it to the API
     register (profile)
      }    
  })
}
}
