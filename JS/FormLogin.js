document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------//
  //  DOM Form Login               //
  // ------------------------------//
  const formLoginContainer = document.getElementById("FormLoginJS");
  const loginForm = createLoginForm();
  formLoginContainer.appendChild(loginForm);
  // ------------------------------//
  //  END DOM From Login            //
  // ------------------------------//
});

// ------------------------------//
//  From Login Structure         //
// ------------------------------//
function createLoginForm() {
  const form = document.createElement("form");
  form.className = "login-form";
  form.innerHTML = `
    <div class="Wrapper-form-login">
      <div class="Container-Header">
        <h1>LOGIN</h1>
      </div>
      <div class="Container-Input-form">  
        <input type="email" name="email" placeholder="Email Address" required>
        <input type="password" name="password" placeholder="Password" required>
        <button class="button"type="submit">SIGN IN</button>
      </div>
      <div class="Option-account">
        <p><strong>Don't have an account? </strong><a href="#">Create an account</a></p>
        <p><a href="#">Forgot your password?</a></p>
      </div>
    </div>
  `;
  return form;
}
// ------------------------------//
//  END From Login Structure     //
// ------------------------------//
