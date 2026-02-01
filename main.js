
const plusBtns = Array.from(document.querySelectorAll('.plus'));
const answers = Array.from(document.querySelectorAll('.ans'));

// Initialize ARIA and keyboard support for FAQ buttons
plusBtns.forEach((btn, index) => {
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', `faq-answer-${index}`);
  if (answers[index]) answers[index].id = `faq-answer-${index}`;

  function toggle() {
    const isOpen = answers[index] && answers[index].style.display === 'block';

    // Close all
    answers.forEach((ans, i) => {
      ans.style.display = 'none';
      plusBtns[i].innerText = '+';
      plusBtns[i].setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      answers[index].style.display = 'block';
      btn.innerText = '×';
      btn.setAttribute('aria-expanded', 'true');
    }
  }

  btn.addEventListener('click', toggle);
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

// Sign in navigation — explicit file path
const signInBtn = document.querySelector('.button');
if (signInBtn) {
  signInBtn.addEventListener('click', () => {
    window.location.href = 'signup/index.html';
  });
}