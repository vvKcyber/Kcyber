const square = document.getElementById('square');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Start the square in the middle of the screen
const startX = (screenWidth - 50) / 2;
const startY = (screenHeight - 50) / 2;
square.style.left = startX + 'px';
square.style.top = startY + 'px';

let speedX = 6; // Initial speed along X-axis
let speedY = 6; // Initial speed along Y-axis

function moveSquare() {
  const currentX = parseInt(square.style.left) || 0;
  const currentY = parseInt(square.style.top) || 0;

  // Calculate new position
  const newX = currentX + speedX;
  const newY = currentY + speedY;

  // Check if the square hits the walls or corners
  if (newX <= 0 || newX >= screenWidth - 50) {
    speedX = -speedX; // Reverse speed along X-axis
  }
  if (newY <= 0 || newY >= screenHeight - 50) {
    speedY = -speedY; // Reverse speed along Y-axis
  }

  square.style.left = newX + 'px';
  square.style.top = newY + 'px';

  checkWin(newX, newY);
}

function checkWin(x, y) {
  if ((x <= 0 || x >= screenWidth - 50) && (y <= 0 || y >= screenHeight - 50)) {
    alert('You win!');
    moveSquare();
  }
}

setInterval(() => {
  moveSquare();
}, 30); // Move square every 30 milliseconds
