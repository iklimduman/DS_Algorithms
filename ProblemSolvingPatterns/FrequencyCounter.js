// write a function called same that accepts 2 input arrays,
// return true if the second array contains corresponding squared values of first array
// frequncy matter
// same([1,2,3],[1,4,9])  ; true
// same([1,2,1],[1,4]) ; false bc of frequency
// same([1,2,3],[1,4]) ; false

function same(inputArr,squareArr){
    if(inputArr.length !== squareArr.length){
        return false ;
    }
    var inputObj = {} ;
    var squareObj = {} ;
    inputArr.forEach(element => {
        inputObj[element] = ++inputObj[element] || 1
    });
    squareArr.forEach(element => {
        squareObj[element] = ++squareObj[element] ||  1
    }) ;

    for(let key in inputObj){
        if(!(key**2 in squareObj)){
            
        }
    }
}

same([1,1,1,2,4,5,6],[1,2,3,3,4,5]) ;