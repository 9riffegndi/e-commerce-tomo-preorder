document.addEventListener("DOMContentLoaded", () => {
  const FormRegistration = document.getElementById("FormRegistrationJS");
  const RegistrationForm = CreateRegistrationForm();
  FormRegistration.appendChild(RegistrationForm);
});

function CreateRegistrationForm() {
  const FormRegis = document.createElement("form");
  FormRegis.className = "RegistrationForm";
  FormRegis.innerHTML = `
    <div class="Wrapper-form-registration">
        <div class="Container-Header">
            <h1>REGISTRATION</h1>
            <p>Enter your information below to proceed. If you already have an account, please log in instead.</p>
        </div>
        <div class="container-input-name">
            <input type="text" id="fist-name" name="first name" placeholder="First Name">
            <input type="text" id="last-name" name="last name" placeholder="Last Name">
        </div>
        <div class="container-input-email-and-password">
            <input type="email" name="email" placeholder="Email Address" required>
            <input type="password" name="password" placeholder="Password" required>
            <button class="button"type="submit">SIGN IN</button>
        </div>
        <div class="Option-account">
            <p><strong>Already have an account? </strong><a href="/pages/Login.html">Login</a></p>
        </div>
    </div>
    `;
  return FormRegis;
}
