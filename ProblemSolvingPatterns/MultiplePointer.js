// write a function called sumZero which accepts a sorted array of integers.
// returns a sub-array inside this array, sub-array contains 2 elements and sum of them equals to zero
// If pair does not exist return undefined

//sumZero([-3,-2,-1,0,1,2,3])  ; [-3,3]
//sumZero([-5,2,3,4]) ; undefined

function sumZero(arr){
    let left = 0 ; 
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right] ;

        if(sum > 0){
            right -= 1;
        }
        else if(sum < 0){
            left += 1 ;
        }
        else{
            return [arr[left],arr[right]]
        }
    }
}

var result = sumZero([-3,-2,-1,0,1,2,30]) ;
console.log(result) // [-2,2]

// write a function called countUniqueVales wgich accepts a sorted array and returns number of unique integers
// countUniqueValues([1,1,1,2,2,3]) ; 3
// countUniqueValues([-2,-1,0,1]) ; 4

function countUniqueValues(arr){
    var uniqueCount = 0 ;
    if(arr.length == 0 || arr.length == 1){
        return arr.length ;
    }
    let base = 0 ;
    let compare = 1 ;

    while(compare <= arr.length){
        if(arr[base] !== arr[compare]){
            uniqueCount++ ;
            base = compare ;
        }
        else{
            compare++
        }
    }
    console.log(uniqueCount) ;
    return uniqueCount ;
}

countUniqueValues([-2,-1,-1,3,3,3,3,5,6]) ;