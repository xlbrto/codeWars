//function, for loop and if else loop
//.lenght returns the number of characters on a string

//solution

function countSheeps(arrayOfSheep) {
    let num = 0
    
    for(let i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++
        
    return num
  } 