//Instructions required to loop through a string and repeat the character so .lenght
//property was needed and then indexing into the string to repeat it twice

//solution

function doubleChar(str){
    let double = ""
    
    for (let i = 0; i < str.length; i++){
      double += str[i] + str[i]
    }
    return double
  }