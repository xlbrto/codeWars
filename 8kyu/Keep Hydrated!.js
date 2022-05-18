//just a reminder to read the instructions better because it asked to
//round to the smallest value and for that the MDN is my friend and 
//Math.floor() was the correct method to use here. 

//solution

function litres(time) {
    let water = 0.5
    return Math.floor(time * water)
  }
  
  litres(11.8) 