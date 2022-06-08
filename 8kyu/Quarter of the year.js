//Instructions required an else if loop to be able to go through the number of 
//months and decide which quarter said month was a part of 

//solution

const quarterOf = (month) =>{
    if (month <= 3){
      return 1
    }else if (month <= 6){
      return 2
    }else if (month <= 9){
      return 3
    }else if (month <= 12){
      return 4
    }
  }