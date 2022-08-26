function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let odd =[];
    for(i = 1; i < arr.length; i+= 2) {

            odd.push(arr[i]);
    }
    return odd;
}


function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here

let odd = [];
for (i = arr.length - 1; i > 0; i--) {
    if (i % 2 !== 0) {
        odd.push(arr[i]);
    }
}
return odd;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let power = [] ;

    for (i = 1; i < arr.length; i *= 2) {
            power.push(arr[i]);
    }
    return power;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let result = [];

    for (i = 1; i < arr.length; i *= n) {
        result.push(arr[i]);
    }
    return result;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let halfArr = [] ;
    for (i = 0 ; i < (arr.length / 2 ); i++) (
        halfArr.push(arr[i])
    )
    return halfArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let halfArr2 = [];
    for (i = Math.floor((arr.length + 1) / 2); i < arr.length; i++) { // requires Math.floor() function to round down to include anx exc. mid
        halfArr2.push(arr[i]) ;                                       // start of second half [1,2,3,4,5] (5+1)/2 = 3  arr[3] = 4
    }
    return halfArr2;
}



module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
