

// Const Variables to help walk through the page
const order = {};
// all the selections that customer makes
const steps = ["pigSizeForm", "includeHeadForm", "orderSummary"];

// function to walk through


function submitPigSize(e){
    e.preventDefault();
    const inputs = document.getElementsByName("pigSize");
    const displaySize = document.getElementById("displaySize");

    for (let i=0; i < inputs.length; i++){
        if(inputs[i].checked){
            order.size = inputs[i].value;
            displaySize.textContent = order.size;
        }
    }

}
// function that selects Whole Pig or 1/2 pig and then makes next step appear 
// function sumbitPigSize(e) {
//     e.preventDefault();
//     // prevent default
//     const inputs = document.getElementsByName("pigSize");
//     // a variable that will get all the pig sizes
//         // Const used in a function-> this variable only applies within this function..it is a block scoped variable

//     const displaySize = document.getElementById("displaySize");
//     for (let i = 0; i < inputs.length; i++) 
//     // loop that will run through pigSize options
//             {
//         if (inputs[i].checked) {
//             order.size = inputs[i].value;
//         // statement to find inputs/sizes checkd and adds the size to the order
//             displaySize.textContent = order.size;
//         // statement to display the checked item
//         }
//         if (order.size == "whole") {visible};
//         // once the size(order) is selected display the correlating menu options (either one by one or as a whole)
//     //  
//     }
//     nextStep(e.target.value);
//     // a button that when selected moves you to the next option
// }
    
// a function that gets the head options
// function submitIncludeHead(e) {
//     e.preventDefault();
//     // prevent default run
    
//     const inputs = document.getElementsByName("includeHead");
//     // variable that gets all potential head options
//     const displayIncludeHead = document.getElementById("displayIncludeHead");
      
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].checked) {
//         order.includeHead = inputs[i].value;
//     // a loop that will run through head options and find the one that is checked
//         displayIncludeHead.textContent = order.includeHead;
//         }
//     // a statement to display the checked option
//     }
//     nextStep(e.target.value);



// }

function submitOrder(e) {
    e.preventDefault();
    // prevent default run
    // get radio selected items
    const selectedJowl = document.querySelector('input[name="listGroupRadioJowl"]:checked');
    const jowlReview = document.getElementById("jowlReview");
    jowlReview.textContent = selectedJowl.value;
    // check if radio button is selected
        // get teh value of the selected readio button
    const selectedNeck = document.querySelector('input[name="neckRadio"]:checked');
    const neckReview = document.getElementById("neckReview")
    neckReview.textContent = selectedNeck.value;

    // const selectedButt = document.querySelector('input[name=" buttRadio"]:checked');
    // console.log(hello)
    // const buttReview = document.getElementById("buttReview")
    // buttReview.textContent = selectedButt.value;

} 
    // show radio selected items from order sheet
    
