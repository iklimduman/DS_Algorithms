// Objects are un-ordered data structures and everything stored key,value pairs
// Objects work well when you dont need order and when you need fast access/inertion/removal
// Insertion = O(1)
// Removal  = O(1)
// Searching = O(n)
// Access = O(1)

let instructor = {
    name : "kelly",
    isInstructor : true,
    favNumbers : [1,2,3,4]
}

//O(n)
console.log(Object.keys(instructor)) ;

// O(n)
console.log(Object.entries(instructor)) ;

// objects are created from hash map data structures, and thus it is possible for data stored within them to have what are called collisions. 
// O(1)
console.log(instructor.hasOwnProperty('name')) ;

// Arrays,unlike an object, are ordered
// Searching = O(n)
// Accessing = O(1)
let names = ["Michael", "Melissa", "Andrea"] ;
let values = [true, {}, [], 2, "awesome"] ; 

//Insertion is depends
//.push appends element at the end of array, so it doesnt need to go through elements, complexity is constant o(1)
names.push("Raj") ;

//.pop removes last element from array, time complexity is O(1)
names.pop() ;

//.unshift appends element at index 0, its time complexity is o(n) because it needs to re-index every element in array
names.unshift("Mike") ;

//same thing when you wnat to remove element from beggining of the array, re-indexing cause O(n)
names.shift() ;

//concat merges two or more arrays, complexity is O(n), reindexing. Returns new array not modifys original arrays.
let surnames =["Doe", "Smith"] ;
let arrayMerge = names.concat(surnames) ;

//slice returns a part of an array. O(n). Shallow copy
console.log(arrayMerge.slice(1,4)) ;

//.splice modifys original array, renmoves and adds elements at given index.
// Complexity depends on location, if you add element to end of the array its O(1) but in general its O(n)
arrayMerge.splice(1,0,"New Element") ;

//.sort O(N*logN)
// .map .filter .reduce O(n)
