document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------//
  //  DOM Form Login               //
  // ------------------------------//
  const FormLogin = document.getElementById("FormLoginJS");
  const LoginForm = createLoginForm();
  FormLogin.appendChild(LoginForm);
  // ------------------------------//
  //  END DOM From Login            //
  // ------------------------------//
});
// ------------------------------//
//  From Login Structure         //
// ------------------------------//
function createLoginForm() {
  const FormLog = document.createElement("form");
  FormLog.className = "login-form";
  FormLog.innerHTML = `
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
        <p><strong>Don't have an account? </strong><a href="/pages/Registration.html">Create an account</a></p>
        <p><a href="/pages/ForgotPassword.html">Forgot your password?</a></p>
      </div>
    </div>
  `;
  return FormLog;
}
// ------------------------------//
//  END From Login Structure     //
// ------------------------------//
