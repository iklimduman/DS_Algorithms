// write a function that takes two input strings and return true if second string is
// an anagram of first string, else return false

function validAnagram(str1,str2){

    if(str1.length !== str2.length){
        return false ;
    }

    var Obj1={} ;
    var Obj2={} ;

    for(let char in str1){
        Obj1[str1[char]] = ++Obj1[str1[char]] || 1 ;
    }

    for(let char in str2){
        Obj2[str2[char]] = ++Obj2[str2[char]] || 1 ;
    }

    for(let key in Obj1){
        if((!(key in Obj2)) || Obj1[key] !== Obj2[key]){
            return false
        }
    }

    return true ;

}

// another solving method for better space complexity,time complexity is same O(n)
const validAnagramES6 = (str1,str2) => {
    if(str1.length !== str2.length){
        return false ;
    }
    
    var lookup = {} ;

    for(let i=0 ; i<str1.length ; i++){
        let letter = str1[i] ;
        lookup[letter] ? lookup[letter]+=1 : lookup[letter] = 1 ;
    }

    for(let i=0 ;i<str2.length;i++){
        let letter = str2[i] ;
        if(!lookup[letter]){
            return false
        }
        else{
            lookup[letter] -= 1 ;
        }
    }

    return true ;
}
const result = validAnagramES6("iklim", "milki") ;
console.log(result) ;