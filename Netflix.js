
const plusBtns = document.querySelectorAll(".plus");
const answers = document.querySelectorAll(".ans");

plusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {

    const isOpen = answers[index].style.display === "block";

    // Close all first
    answers.forEach((ans, i) => {
      ans.style.display = "none";
      plusBtns[i].innerText = "+";
    });

    // If clicked one was closed, open it
    if (!isOpen) {
      answers[index].style.display = "block";
         btn.innerText = "×";
    }
  });
});

let btn =  document.querySelector(".button") ;
btn.addEventListener("click",() => {
  window.location.href = "signuppage.html";
  
 });