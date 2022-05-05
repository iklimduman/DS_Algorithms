// write a function called search, which appets a sorted array and an integer value.
// return given integers index if it exist in array, if not return -1
// this method is explained in more detail in the binary-search section

// [1,2,3,4,5,6,7,8,9,10,11]

function search(array,value){
    let min = 0 ;
    let max = array.length - 1 ; 

    while(min < max){
        let middle = Math.floor((min+max) / 2) ;
        let middleElement = array[middle] ;

        if(middleElement > value){
            max = middle + 1 ;
        }
        else if(middleElement < value){
            min = middle - 1 ;
        }
        else{
            return middle ;
        }
    }

    return -1;
}

console.log(search([1,2,3,4,5,6,7,8,9,10,11],9)) ;