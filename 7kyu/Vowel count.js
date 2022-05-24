//Created an array that contained all the acceptable values
//used the .includes() method and increased the count of the variable if it found a
//vowel on the string

//solution

function getCount(str){
    let vowelsCount = 0
    const vowels = ['a','e','i','o','u']
    for (let char of str){
      if(vowels.includes(char)){
        vowelsCount++
      }
    }
    return vowelsCount
  }