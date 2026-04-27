let score = 0;
let time = 10;
let timerInterval = null;
const tapBtn = document.getElementById('tapBtn');
const restartBtn = document.getElementById('restartBtn');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');

function startGame() {
  score = 0;
  time = 10;
  tapBtn.disabled = false;
  tapBtn.style.display = 'inline-block';
  restartBtn.style.display = 'none';
  scoreDisplay.textContent = 'Score: 0';
  timerDisplay.textContent = 'Time: 10';

  timerInterval = setInterval(() => {
    time--;
    timerDisplay.textContent = 'Time: ' + time;
    if (time <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  tapBtn.disabled = true;
  tapBtn.style.display = 'none';
  restartBtn.style.display = 'inline-block';
  timerDisplay.textContent = 'Time\'s up!';
}

tapBtn.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = 'Score: ' + score;
});

restartBtn.addEventListener('click', startGame);

// Initial state
startGame();
