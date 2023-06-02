
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic
     // A is greater
     if(a>b){
      comparison = ">";
     }
     else if(b>a){
      // B is greater
      comparison = "<";
     } else if(a == b) {
      // A is equal to B
      comparison = "==";
     } else {
      // One or more isn't a number
    comparison ="n/a" 
    }
     

  
     document.querySelector('#comparison').innerText = comparison;
   };
 