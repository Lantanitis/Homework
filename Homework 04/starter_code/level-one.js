/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}

// increasing the score by increments of 10
// log it to the counter

function addToCounter() {
  score = score + 10;
  scoreEl.innerHTML = score;
  if (score >= 100) {
    declareWinner()}
}
  // scoreEl.innerHTML = 100


// if scoreEl = 100, then "Winner" button appears

// let scoreEl.innerHTML = new .level-winner();
// if (scoreEl.innerHTML >= 100 )

ballEl.addEventListener('click', addToCounter)

// when counter reaches 100 "Winner" appears
// level 2 becomes "clickable" 
// player can move on to level 2

