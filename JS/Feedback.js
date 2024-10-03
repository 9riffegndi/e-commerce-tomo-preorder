document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------//
  //  DOM Form Login               //
  // ------------------------------//
  const FeedbackJS = document.getElementById("FeedbackJS");
  const Feedback = CreateFeedback();
  FeedbackJS.appendChild(Feedback);
  // ------------------------------//
  //  END DOM From Login            //
  // ------------------------------//
});
// ------------------------------//
//  From Login Structure         //
// ------------------------------//
function CreateFeedback() {
  const FdBackForm = document.createElement("form");
  FdBackForm.className = "Form-Feedback";
  FdBackForm.innerHTML = `
    <div class="Wrapper-feedback-form">
      <div class="Container-Header">
        <h1>We Value Your Feedback</h1>
        <p>Your feedback helps us improve our products and services. Please fill out the form below to share your thoughts with us.</p>
      </div>
      <div class="Container-Input-form-fb">  
        <input type="text" name="Name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email Address" required>
        <button type="submit">SUBMIT</button>
      </div>
    </div>
    <div class="comment-feedback">
        <textarea name="Feedback" id="feedback-comment" placeholder="Your Feedback"></textarea>
    </div>            `;
  return FdBackForm;
}
// ------------------------------//
//  END From Login Structure     //
// ------------------------------//
