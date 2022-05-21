//Used an if else loop to get to the expected output 
//instructions requested if n < 0 or m < 0 return 0

//solution

function paperwork(n, m){
    if(n < 0 || m < 0){
      return 0
    } else {
        return n * m
    }
  }