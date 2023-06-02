// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// function to turn all lights off
function allLightsOff (){
    document.querySelector('#stopLight').classList.remove('glow');
    document.querySelector('#slowLight').classList.remove('glow');
    document.querySelector('#goLight').classList.remove('glow');
}
// function to turn the stop on
function stop(){
    allLightsOff();
    document.querySelector('#stopLight').classList.add('glow')
}

    // turn off all lights
    // turn on the stop

// function to turn the slow on
function slow(){
    allLightsOff();
    document.querySelector('#slowLight').classList.add('glow')}
    // turn off all lights
    // turn on the slow

// function to turn the go on
function go(){
    allLightsOff();
    document.querySelector('#goLight').classList.add('glow')}

    // turn off all lights
    // turn on the go

// add event listeners to each of the buttons
let stopButton = document.querySelector('#stopButton')
stopButton.addEventListener('click',stop);
document.querySelector('#slowButton').addEventListener('click',slow);
document.querySelector('#goButton').addEventListener('mouseover',go);







// let stopLightButton = document.querySelector('#stopLight');
// let slowLightButton = document.querySelector('#slowLight');
// let goLightButton = document.querySelector('#goLight')

// stopLightButton.addEventListener('click',stopLight);
// slowLightButton.addEventListener('click',slowLight);
// goLightButton.addEventListener('click',goLight);
// document.querySelector("#stopButton").addEventListener('click',stop)
// document.querySelector('#slowButton').addEventListener('click',stop)