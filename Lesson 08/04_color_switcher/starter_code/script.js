// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!


function greyscheme()
{
    document.querySelector('body').style.backgroundColor = 'grey';
    document.querySelector('h1').style.color = 'white';
    document.querySelector('p').style.color = 'white';
}

function whitescheme() 
{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('h1').style.color = 'black';
    document.querySelector('p').style.color = 'black';

}

let graybutton = document.querySelector('#grayButton'); 
console.log(graybutton);

let whitebutton = document.querySelector('#whiteButton');
console.log(whitebutton);

graybutton.addEventListener('click', greyscheme)
whitebutton.addEventListener('click', whitescheme)
// A function that turns the grey scheme on

    // Set the body background

    // Set the text color

// A function that turns on the white scheme on

      // Set the body background

    // Set the text color

// Create objects fo the two buttons


// When I click the grey button, run the grey scheme function

// When I click the white button, run the white scheme function