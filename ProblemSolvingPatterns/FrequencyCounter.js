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

// write a function called SameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time complexity must be O(N)
// exp sameFrequency(182,281) ; true
// exp sameFrequency(34,14) ; false

function SameFrequency(int1,int2){

    Obj1 = {} ;
    Obj2 = {} ;

    String(int1).split("").map(element => Obj1[element] ? ++Obj1[element] : Obj1[element] = 1 ) ;

    String(int2).split("").map(item => Obj2[item] ? ++Obj2[item] : Obj2[item] = 1) ;

    let outterObj = {} ;
    let innerObj = {} ;

    if(Object.keys(Obj1).length >= Object.keys(Obj2).length){
        outterObj = Obj1 ;
        innerObj = Obj2 ;
    }
    else{
        outterObj = Obj2 ;
        innerObj = Obj1 ;
    } ;

    for(let key in outterObj){
        if(!(key in innerObj)){
            return false
        }
        if(outterObj[key] !== innerObj[key]){
            return false
        }
    }

    return true ;
}

// write a function called areThereDuplicates which accepts variable number of arguments
// checks wheter there are any duplicates among the arguments passed in, if exist return true.

// arguments.length property returns number of arguments passed through the funtion

const areThereDuplicates = (base) => {
    var Obj = {} ;

    for(let i=0 ; i<arguments.length ; i++){
        Obj[arguments[i]] ? ++Obj[arguments[i]] : Obj[arguments[i]] = 1 ;
    }

    for(let key in Obj){
        if(Obj[key] >= 2){
            return true ;
        }
    }

    return false ;
}