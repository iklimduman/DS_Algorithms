// binary search only works for sorted arrays
// divide and conquer

// write a function for sorted array and value
// return index if val exist in array else return -1

const checkValueExist = (arr,val) => {
    let min = 0 ;
    let max = arr.length -1 ;
    let middle = Math.floor((min + max) / 2) ;

    while(arr[middle] !== val && min <= max) {
        if(arr[middle] > val) max = middle - 1
        else min = middle + 1
        middle = Math.floor((min+max) / 2) ;
    }
    return arr[middle] === val ? middle : -1
}

console.log(checkValueExist([1,2,3,4,5,6,7,8,9,10,11,12], 12))

/*
complexity in Binary Search is O(logn)  => worst and average case
best case is O(n)
*/