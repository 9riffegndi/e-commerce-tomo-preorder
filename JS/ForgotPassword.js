document.addEventListener("DOMContentLoaded", () => {
  const ForgotPasswordJS = document.getElementById("ForgotPasswordJS");
  const ForgotPassword = CreateForgotPassword();
  ForgotPasswordJS.appendChild(ForgotPassword);
});

function CreateForgotPassword() {
    const ForgotPassword = document.createElement("div");
    ForgotPassword.className = "Forgot-password-overlay";
    ForgotPassword.innerHTML = `
    <div class="Wrapper-forgot-password">
        <div class="Container-Header">
            <h1>RESET YOUR PASSWORD</h1>
            <p>We will send you an email to reset your password</p>
        </div>
        <div class="Container-Input-forgot-password">
            <input type="email" name="email" placeholder="Email Address" required>
            <button class="button"type="submit">SUBMIT</button>
        </div>
        <div class="Option-account">
            <p><a href="/pages/Login.html">Cancel back to Login</a></p>
            <p><strong>Don't have an account? </strong><a href="/pages/Registration.html">Create an account</a></p>
        </div>
    </div>
    `;
    return ForgotPassword;
}
