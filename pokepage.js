document.addEventListener('DOMContentLoaded', () => {
    const getAdviceButton = document.getElementById('getAdviceButton');
    const adviceDisplay = document.getElementById('adviceDisplay');

    getAdviceButton.addEventListener('click', () => {
      fetch('https://api.adviceslip.com/advice')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch advice.');
          }
          return response.json();
        })
        .then(data => {
          displayAdvice(data.slip.advice);
        })
        .catch(error => {
          console.error('Error:', error);
          adviceDisplay.textContent = 'Failed to fetch advice.';
        });
    });

    function displayAdvice(advice) {
      adviceDisplay.textContent = advice;
    }
  });