// indexOf, includes, find, findIndex functions are working in the background with linear search

// write a func accepts and array and a value
// loop through array and check if value equals to the array element, if it is return the index if not return -1

const checkIfExist = (arr, val) => {
    var index = -1;
    for (let element of arr) {
        element == val ? index = arr.indexOf(val) : null
    }
    return index
}
console.log(checkIfExist([1, 2, 3, 4, 5], 5))

/*
Linear search is the best we can do with unsorted data
Best case in complexity is O(1)
Worst case is O(n)
Average is also O(n)  => average trend
*/