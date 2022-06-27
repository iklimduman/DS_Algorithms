// define function that takes 2 string, larger string and a substring
// return how many substring match in larger string
// ("ahtgfuomgnsjasomg" , "omg")  => two matches

const getNumberOfMatches = (largeString, subString) =>{
    count = 0 ;
    for(let i=0 ; i<largeString.length ; i++){
        for(let j=0 ; j<subString.length ; j++){
            if(subString[j] !== largeString[i+j]) break ;
            if(j == subString.length - 1 ) count++ ;
        }
    }
    return count ;
}

console.log(getNumberOfMatches("ahtgfuomgnsjasomg", "omg"));