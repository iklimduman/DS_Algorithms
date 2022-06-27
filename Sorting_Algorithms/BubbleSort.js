// bubble sort compares two elements in array and swaps for ascending order

const bubbleSort = (arr) => {
    const swap = (arr,idx1,idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]] ;
    }
    var noSwaps ;
    for(var i=arr.length ;i>0; i--){
        noSwaps = true ;
        for(var j=0 ;j<i-1 ;j++){
            if(arr[j] > arr[j+1]){
                //SWAP
                swap(arr,j,j+1) ;
                noSwaps = false ;
            }
        }
        if(noSwaps) break ;
    }
    return arr ;
}

console.log(bubbleSort([1,3,5,2,18,3,6,25])) ;

/*
Time complexity of bubble sort is generally O(n^2)
Best case => If the data is nearly or completly sorted complexity is O(n)
*/