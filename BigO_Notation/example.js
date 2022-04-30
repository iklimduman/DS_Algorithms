const {performance} = require('perf_hooks');
// visualizing time complexity


// Time complexity is f(n) = n
// Space complexity is O(1) because no matter how  big is the input, there will only be 2 variables in function.(sum and i)
function CountToN(n){
    var sum = 0 ;
    for(let i=0 ; i<=n ; i++){
        sum += i ;
    }
    return sum ;
}

//Time complexity is f(n) = 1
function CountToN_(n){
    return (n*(n+1))/2
}


// measuring time complexity is not recommended with performance function, because different machines measures different time. It is not reliable.
t1 = performance.now() ;
const sum1 = CountToN(1000000) ;
t2 = performance.now() ;
const sum2 = CountToN_(1000000) ;

console.log(`Time difference is ${(t2-t1)} seconds`) ;


// There is no such thing like 2*O(n), this functions time complexity is also O(n)
function countUpAndDown(n) {
    for(var i=0 ; i<=n ; i++){
        console.log(i) ;
    };
    for(var j=n-1 ; j>= 0 ; j--){
        console.log(j)
    };
}

countUpAndDown(10) ;


// O(n) operation inside O(n) operation cause O(n^2) complexity
function pritnAllPairs(n) {
    for(var i=0 ;i<n ;i++){
        for(var j=0 ; j<n ;j++){
            console.log(i,j)
        }
    }
}

pritnAllPairs(2) ;


// Space complexity is O(n) because as the input arr lenght grows newArr size proportionally grows
function double(arr){
    let newArr = [] ;
    for(let i=0 ;i<arr.length ; i++){
        newArr.push(2 * arr[i]) ;
    }
    return newArr ;
}
