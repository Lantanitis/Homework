/*
 * DOTS: Level Three
 *
 */



// Level 3 also has 3 moving balls but of different sizes! 
// Each ball is therefore worth a different amount of points. 
// The number of points the user should get for each ball is saved in side 
//          of a data attribute on the ball HTML elements. 
// You can access the data attribute of an element from the event object by 
//          looking at the event target's `dataset` property. 
// When the user clicks on a ball, increment their score based on how many 
//          points that ball is worth until they reach 100.

let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


// Finding "if" balls are clicked on identifying  

// How do you access a property of an object?

// function contains(whatYourchecking, lookingFor ){
  //loop over each item in the class list array
  //for us this is ['ball', 'js-ball']
  //for each item, if the item equals the string we're looking for return true
  //if it doesn't equal then continue checking next item
  // if you get to the end of the list and none are equal return false
// }

    function addToCounter(e) {
      if (e.target.classList.contains('js-ball')) {
        score = score + parseInt(e.target.dataset.increment);
        scoreEl.innerHTML = score
        if (score >= 100) {declareWinner()};

      }

        // if (.ball ) {}
        // scoreEl.innerHTML = score; 
      }

// Make each ball clickable and send to counter
arenaEl.addEventListener('click', addToCounter);


// When counter equals 100 show "winner"

function declareWinner() {
    document.body.classList.add('game-over');
  }

function sayHi(){
    console.log("Hi")
}
