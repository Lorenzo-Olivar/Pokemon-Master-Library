const audioEl = document.getElementById('playAudio');
const audioBtn = document.getElementById('audioBtn');
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
          var imgEl = document.createElement('img');
          imgEl.setAttribute('src', './images/textbox0.png');
          imgEl.setAttribute('style', 'position: absolute; left: -12px; top: -23px; z-index: -1; width: 400px;')
          adviceDisplay.appendChild(imgEl);
        })
        .catch(error => {
          console.error('Error:', error);
          adviceDisplay.textContent = 'Failed to fetch advice.';
        });
    });

    function displayAdvice(advice) {
      adviceDisplay.textContent = advice;
      adviceDisplay.setAttribute('style', 'position: relative; max-width: 360px; text-align: center;');
    }
  });

  audioBtn.addEventListener('click', () => {
    audioEl.play();
  }
  );


  

    