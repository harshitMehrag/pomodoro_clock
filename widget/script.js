let timer;
let isRunning = false;
let minute = 25;
let seconds = 0;


const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


function updateDisplay() {
    minutesDisplay.textContent = String(minute).padStart(2,0);
    secondsDisplay.textContent = String(seconds).padStart(2,0);
}


function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    alert('Time is up!');
                    isRunning = false;
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer(){
    clearInterval(timer);
    isRunning = false;
    minute = 25;
    seconds = 0;
    updateDisplay();
}

updateDisplay();