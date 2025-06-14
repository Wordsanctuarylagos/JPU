// === FTG FORM SUBMIT TO GOOGLE SHEET ===
const jpuURL = 'https://script.google.com/macros/s/AKfycbzKIz0Q735HDPtZCdtEH-ZCP870AQ1AgStREcXwP2jrTopxUtbP6icKXh2t5uDjtAPB/exec'; // replace this


document.getElementById('formFTG').addEventListener('submit', function (e) {
  e.preventDefault();

  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Submitting...';
  submitButton.disabled = true;

  fetch(jpuURL, {
    method: 'POST',
    body: new FormData(this)
  })
    .then(res => {
      submitButton.textContent = 'Submitted!';
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        this.reset();
      }, 1500);
    })
    .catch(err => {
      console.error('Submission failed', err);
      alert('Error submitting form. Please try again.');
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
});
