
   //   var dices;
   const dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
// create function random number generator
  function change() {
  let random = Math.floor(Math.random()*6);
  document.getElementById("dice").innerHTML = dices[random]; 
}
let clicked = true;

let stopstart =()=> {
  if(clicked) {
   t = setInterval(change, 100);
   clicked = false;
    
  } else {
    clearInterval(t);
    clicked = true;
  }
  
}

window.onload = function() {
  stopstart(); 
}
