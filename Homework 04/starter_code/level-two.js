/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');
let ballEl = document.querySelector('.js-ball');

// Level 2 has 3 moving balls that the user can click on to increment their score. 
// Implement a single click handler to listen for when a user clicks on one of the balls 
// and increment their score until they reach 100.

// Have counter increase by 10 when any ball is clicked
function addToCounter() {
    score = score + 10;
    scoreEl.innerHTML = score;
    if (score >= 100) {
      declareWinner()}
  }


ballEl.addEventListener('click', addToCounter)

// When counter reaches 100, have it say "winner"

function declareWinner() {
    document.body.classList.add('game-over');
  }