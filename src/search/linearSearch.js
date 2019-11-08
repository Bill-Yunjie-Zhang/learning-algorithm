let numbers = [1, 2, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 15, 16, 17]

const linearSearch = (numArray, num) => {
    for(ii = 0; ii < numArray.length; ii ++){
        if(num === numbers[ii]){
            return "The index of the number's first occurence is " + ii
        }
    }
    return "The number is not included"
}

console.log(linearSearch(numbers, 17))