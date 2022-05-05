// write a function called maxSubarraySum which accepts an arry of inetegers and number called n
// the func should calculate the maximum sum of n consecutive elements in array
// maxSubaraySum([1,2,5,2,8,1,5],4) ; 17

function maxSubaraySum(arr,n){
    var sum = 0 ;
    var tempSum = 0 ;

    for(let i=0 ; i<n ; i++){
        tempSum += arr[i]
    }

    for(let i=0 ; i<(arr.length-n) ; i++){
        tempSum = tempSum - arr[i] + arr[n+i] ;
        if(tempSum > sum){
            sum = tempSum
        }
    }

    return sum ;
}

var result = maxSubaraySum([1,2,5,2,8,1,5],4) ;
console.log(result) ;