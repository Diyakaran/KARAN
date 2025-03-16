document.addEventListener("DOMContentLoaded", function () {
    let cars = document.querySelectorAll(".car");
    let gameArea = document.querySelector(".background");
    let countdown = 3;
    let gameStarted = false;
    let carPositions = [];

    // Create Countdown Display Inside Background
    let countdownDisplay = document.createElement("h1");
    countdownDisplay.id = "countdown";
    countdownDisplay.style.position = "absolute";
    countdownDisplay.style.top = "50%";
    countdownDisplay.style.left = "50%";
    countdownDisplay.style.transform = "translate(-50%, -50%)";
    countdownDisplay.style.fontSize = "80px";
    countdownDisplay.style.color = "white";
    countdownDisplay.style.fontWeight = "bold";
    gameArea.appendChild(countdownDisplay);

    // Create Finish Line
    let finishLine = document.createElement("div");
    finishLine.style.position = "absolute";
    finishLine.style.right = "50px";
    finishLine.style.top = "0";
    finishLine.style.width = "10px";
    finishLine.style.height = "100vh";
    finishLine.style.background = "red";
    gameArea.appendChild(finishLine);

    // Initialize Car Positions with Slightly Reduced Gap
    cars.forEach((car, index) => {
        let posX = 20;
        let posY = 100 + index * 130; // Reduced the gap slightly from 160px to 130px
        car.style.position = "absolute";
        car.style.left = posX + "px";
        car.style.top = posY + "px";
        carPositions.push({ car, posX, posY });
    });

    // Countdown Timer
    let countdownInterval = setInterval(() => {
        if (countdown > 0) {
            countdownDisplay.innerText = countdown;
            countdown--;
        } else {
            clearInterval(countdownInterval);
            countdownDisplay.remove(); // Remove countdown after start
            gameStarted = true;
        }
    }, 1000);

    // Move All Cars Left to Right
    function moveCars() {
        if (gameStarted) {
            carPositions.forEach((carObj) => {
                carObj.posX += Math.random() * 5 + 2; // Random Speed for Each Car
                carObj.car.style.left = carObj.posX + "px";
                
                // Check if Car Crosses Finish Line
                if (carObj.posX >= window.innerWidth - 100) {
                    alert(`${carObj.car.alt} Wins!`);
                    location.reload();
                }
            });
        }
    }

    setInterval(moveCars, 50);
});
