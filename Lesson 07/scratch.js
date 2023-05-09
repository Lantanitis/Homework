What does a Thermostat Do?

* Tells the temperature
* Turns on the furnace
* Turn off the furnace
* Get wanted temperature

//PseudoCode Program - KEEP WORDS SIMPLE!!!

// Decide whether to turn furnace on or off
function named furnaceManage

current = Get the current temp
wanted = Get the wanted temp

// I want to change only change if I'm more than
// 2 degrees off
if current + 2 < wanted
    turn on

if wanted is - 2 >= current
    turn off


loop furnaceManage forever



















let playerA = "scissors"
let playerB = "rock"

function playGame(playerA,playerB){
    if(playerA == playerB){
        return "tie";
    }
    
    if(playerA == "scissors"){
        if(playerB == "rock"){
            return "B";
        }else{
            return "A";
        }
    }
    
    
    if(playerA == "rock"){
        if(playerB == "paper"){
            return "B";
        }else{
            return "A";
        }
    }
    
    if(playerA == "paper"){
        if(playerB == "scissors"){
            return "B";
        }else{
            return "A";
        }
    }
}
