

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation

    document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
        e.preventDefault();
        
        let navMobile = document.querySelectorAll(".trulia-nav > nav > ul");
        for (let i = 0; i < navMobile.length; i++) {
            console.log(navMobile[i]);
        navMobile[i].classList.toggle("trulia-nav-mobilehide")
        }

    });

});




// Loop through all the cards
    
  // Add a click listener on each card
      
      // Remove the featured class


      // Add the featured class on the one clicked on



  



