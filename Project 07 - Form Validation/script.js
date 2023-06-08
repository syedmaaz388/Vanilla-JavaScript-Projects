const form = document.querySelector('.feedback-form');
const p = document.querySelector("p");


const usernamePattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userResult = usernamePattern.test(form.username.value);
  const feedbackResult = feedbackPattern.test(form.feedback.value);

  if(userResult && feedbackPattern){
     p.setAttribute('class','success');
     p.innerText = "Feedback submitted, Thank you!";
  }else{
    p.setAttribute('class','error');
    p.innerText = "Please check username and feedback again!";
  }

});
const username00 = document.querySelector("#username");
form.username.addEventListener("keyup", (e) => {
  const userResult = usernamePattern.test(username00.value);
  if(userResult){
    form.username.setAttribute('class','accepted');
  }else{
    form.username.setAttribute('class','rejected');

  }
});
form.feedback.addEventListener("keyup", (e) => {
  const feedbackResult = feedbackPattern.test(e.target.value);
  if(feedbackResult){
    form.feedback.setAttribute('class','accepted');
  }else{
    form.feedback.setAttribute('class','rejected');
  }
}); 