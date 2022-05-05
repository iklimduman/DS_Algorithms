// write a function called sumZero which accepts a sorted array of integers.
// returns a sub-array inside this array, sub-array contains 2 elements and sum of them equals to zero
// If pair does not exist return undefined

//sumZero([-3,-2,-1,0,1,2,3])  ; [-3,3]
//sumZero([-5,2,3,4]) ; undefined

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum > 0) {
            right -= 1;
        }
        else if (sum < 0) {
            left += 1;
        }
        else {
            return [arr[left], arr[right]]
        }
    }
}

var result = sumZero([-3, -2, -1, 0, 1, 2, 30]);
console.log(result) // [-2,2]

// write a function called countUniqueVales wgich accepts a sorted array and returns number of unique integers
// countUniqueValues([1,1,1,2,2,3]) ; 3
// countUniqueValues([-2,-1,0,1]) ; 4

function countUniqueValues(arr) {
    var uniqueCount = 0;
    if (arr.length == 0 || arr.length == 1) {
        return arr.length;
    }
    let base = 0;
    let compare = 1;

    while (compare <= arr.length) {
        if (arr[base] !== arr[compare]) {
            uniqueCount++;
            base = compare;
        }
        else {
            compare++
        }
    }
    console.log(uniqueCount);
    return uniqueCount;
}

countUniqueValues([-2, -1, -1, 3, 3, 3, 3, 5, 6]);

// write a function called averagePair. Given a sorted array of integers and target average. Determine if there is a pair of values in the array
// where the average of pair equals the target average. There may be more than one pair that matches average target. Return true if exist.

// Time O(N), Space O(1)

// [1,2,5,6,7,8,11,15,18] , 6.5

const averagePair = (arr, target) => {
    let min = 0;
    let max = arr.length - 1;

    while (min < max) {
        let tempAverage = (arr[min] + arr[max]) / 2;

        if (tempAverage > target) {
            max -= 1;
        }
        else if (tempAverage < target) {
            min += 1;
        }
        else {
            return true;
        }
    }

    return false;
}

// write a function called isSubsequence which accepts 2 strings. Return true if first strings chars appears in the second string without their order changing.
// ("hello","hi haeello world") // true !!

function isSubsequence(str1, str2) {
    if (str2.length < str1.length) {
        return false;
    }

    var i = 0 ;
    var j = 0 ;

    if(!str1){
        return true ;
    }

    while(j < str2.length){
        if(str1[j] === str2[i]) i++ ;
        if(i === str1.length) return true ;
        j++
    }
    
    return false ;
}

isSubsequence("hello","hello hey") ;