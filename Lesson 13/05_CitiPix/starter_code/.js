// austin, nyc, san francisco, sydney --> add to selector on webpage







//update background image depending on what they select


// create an array of the cities 
let cities = ['austin', 'nyc', 'sf', 'sydney', 'la'];
// use array to create dropdown menu
    //create a for loop using the city array
    //each item in the array gets added with an option tag
        //create each
        //set each
        //append each (value attribute)
for(i=0; i < cities.length; i++){
  const addCity = document.createElement("option");
  addCity.innerText = cities[i];
  addCity.value = cities[i];
  document.querySelector("#city-type").appendChild(addCity);
}

//change event handler --> use like click eventlistener
        //get value of which was clicked
        //when changed, if/else statements to see which class to add
            // Set attribute- update html to change the background (class of which city)
document.querySelector('#city-type').addEventListener('change', function(){
    
});